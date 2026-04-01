"use client";

import { useState } from "react";
import { Review } from "@/types/product";
import StarRating from "./StarRating";

interface ReviewSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function ReviewSection({
  reviews,
  averageRating,
  totalReviews,
}: ReviewSectionProps) {
  const [sortBy, setSortBy] = useState<"recent" | "helpful">("helpful");
  const [helpfulClicked, setHelpfulClicked] = useState<Set<string>>(new Set());

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => Math.floor(r.rating) === star).length;
    return { star, count, percentage: (count / reviews.length) * 100 };
  });

  const sortedReviews = [...reviews].sort((a, b) =>
    sortBy === "recent"
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : b.helpful - a.helpful
  );

  const toggleHelpful = (id: string) => {
    setHelpfulClicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="reviews" className="animate-fade-in-up">
      <h2 className="text-xl font-bold text-foreground mb-6">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <div className="bg-surface rounded-2xl border border-border p-6">
          <div className="text-center mb-5">
            <div className="text-4xl font-bold text-foreground">
              {averageRating.toFixed(1)}
            </div>
            <div className="mt-1.5">
              <StarRating rating={averageRating} size="lg" />
            </div>
            <p className="text-sm text-muted mt-1.5">
              Based on {totalReviews.toLocaleString()} reviews
            </p>
          </div>

          <div className="space-y-2.5">
            {ratingDistribution.map(({ star, count, percentage }) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-xs text-muted w-3">{star}</span>
                <svg
                  className="w-3.5 h-3.5 text-star"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-star rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs text-muted w-6 text-right">
                  {count}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full mt-5 py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors">
            Write a Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Sort */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">
              Showing {reviews.length} of {totalReviews} reviews
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "recent" | "helpful")}
              className="text-sm border border-border rounded-lg px-3 py-1.5 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="helpful">Most Helpful</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>

          {/* Review Cards */}
          {sortedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-surface rounded-xl border border-border p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <StarRating rating={review.rating} size="sm" />
                    <h3 className="text-sm font-semibold text-foreground">
                      {review.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span className="font-medium">{review.author}</span>
                    {review.verified && (
                      <span className="text-success flex items-center gap-0.5">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified Purchase
                      </span>
                    )}
                    <span>
                      {new Date(review.date).toLocaleDateString("en-SA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mt-2">
                {review.content}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={() => toggleHelpful(review.id)}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-colors ${
                    helpfulClicked.has(review.id)
                      ? "bg-primary-light text-primary font-medium"
                      : "bg-gray-100 text-muted hover:bg-gray-200"
                  }`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  Helpful ({review.helpful + (helpfulClicked.has(review.id) ? 1 : 0)})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
