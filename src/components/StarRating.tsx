interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

export default function StarRating({
  rating,
  size = "md",
  showValue = false,
}: StarRatingProps) {
  const sizeMap = { sm: "w-3.5 h-3.5", md: "w-4.5 h-4.5", lg: "w-5.5 h-5.5" };
  const textSize = { sm: "text-xs", md: "text-sm", lg: "text-base" };
  const iconSize = sizeMap[size];

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.floor(rating);
        const partial = !filled && star === Math.ceil(rating);
        const percentage = partial ? (rating % 1) * 100 : 0;

        return (
          <span key={star} className="relative">
            {/* Background star (empty) */}
            <svg
              className={`${iconSize} text-gray-200`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {/* Foreground star (filled/partial) */}
            {(filled || partial) && (
              <svg
                className={`${iconSize} text-star absolute inset-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                style={partial ? { clipPath: `inset(0 ${100 - percentage}% 0 0)` } : undefined}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </span>
        );
      })}
      {showValue && (
        <span className={`${textSize[size]} font-medium text-foreground ml-0.5`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
