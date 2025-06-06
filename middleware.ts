import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate limiting configuration
const RATE_LIMIT = 100; // requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// In-memory store for rate limiting
const ipRequests = new Map<string, { count: number; timestamp: number }>();

export function middleware(request: NextRequest) {
  // Get client IP from headers (x-forwarded-for or x-real-ip)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous";
  const now = Date.now();

  // Clean up old entries
  for (const [key, value] of ipRequests.entries()) {
    if (now - value.timestamp > RATE_LIMIT_WINDOW) {
      ipRequests.delete(key);
    }
  }

  // Check rate limit
  const requestData = ipRequests.get(ip) ?? { count: 0, timestamp: now };
  if (requestData.count >= RATE_LIMIT) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  // Update request count
  ipRequests.set(ip, {
    count: requestData.count + 1,
    timestamp: requestData.timestamp,
  });

  // CORS headers
  const response = NextResponse.next();

  // Only allow requests from your production domain
  const allowedOrigins = ["https://vdbyai.vercel.app"];
  const origin = request.headers.get("origin");

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    response.headers.set("Access-Control-Max-Age", "86400");
  }

  return response;
}

export const config = {
  matcher: ["/api/:path*", "/downloads/:path*"],
};
