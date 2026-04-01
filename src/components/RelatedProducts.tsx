import { RelatedProduct } from "@/types/product";
import StarRating from "./StarRating";

export default function RelatedProducts({
  products,
}: {
  products: RelatedProduct[];
}) {
  return (
    <section className="animate-fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">
          Frequently Bought Together
        </h2>
        <a
          href="#"
          className="text-sm text-primary hover:underline font-medium"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          const discount = product.originalPrice
            ? Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )
            : 0;

          return (
            <a
              key={product.id}
              href="#"
              className="group bg-surface rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/20 transition-all"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="w-20 h-28 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold text-center px-2">
                    {product.brand}
                  </span>
                </div>

                {product.tag && (
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {product.tag}
                  </span>
                )}

                {discount > 0 && (
                  <span className="absolute top-2 right-2 bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    -{discount}%
                  </span>
                )}

                {!product.inStock && (
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                    <span className="bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-3">
                <p className="text-[10px] text-muted font-medium uppercase tracking-wide">
                  {product.brand}
                </p>
                <h3 className="text-sm font-medium text-foreground mt-0.5 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mt-2">
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-[10px] text-muted">
                    ({product.reviewCount})
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-sm font-bold text-primary">
                    {product.price.toFixed(2)} SAR
                  </span>
                  {product.originalPrice && (
                    <span className="text-[10px] text-muted line-through">
                      {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <button
                  disabled={!product.inStock}
                  className={`w-full mt-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                    product.inStock
                      ? "bg-primary-light text-primary hover:bg-primary hover:text-white"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "Add to Cart" : "Notify Me"}
                </button>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
