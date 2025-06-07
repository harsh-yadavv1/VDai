interface RateLimitOptions {
  interval: number;
  uniqueTokenPerInterval: number;
}

interface RateLimit {
  check: (limit: number, token: string) => Promise<void>;
}

export function rateLimit(options: RateLimitOptions): RateLimit {
  const tokenCache = new Map<string, number[]>();

  return {
    check: async (limit: number, token: string) => {
      const now = Date.now();
      const windowStart = now - options.interval;

      const tokenTimestamps = tokenCache.get(token) || [];
      const validTimestamps = tokenTimestamps.filter(
        (timestamp) => timestamp > windowStart
      );

      if (validTimestamps.length >= limit) {
        throw new Error("rate limit exceeded");
      }

      validTimestamps.push(now);
      tokenCache.set(token, validTimestamps);

      // Clean up old entries
      if (tokenCache.size > options.uniqueTokenPerInterval) {
        const oldestToken = tokenCache.keys().next().value;
        tokenCache.delete(oldestToken);
      }
    },
  };
}
