export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Gradient spinner */}
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-purple-500 border-t-transparent shadow-md"></div>

        {/* Loading text */}
        <div className="mt-20">
          <span className="text-gray-500">Loading...</span>
        </div>
      </div>
    </div>
  );
}
