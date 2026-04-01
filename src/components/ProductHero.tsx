"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import StarRating from "./StarRating";

export default function ProductHero({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section className="animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square bg-white rounded-2xl border border-border overflow-hidden flex items-center justify-center group">
            {/* Placeholder product visual */}
            <div className="w-full h-full bg-gradient-to-br from-green-50 via-white to-emerald-50 flex flex-col items-center justify-center p-8">
              <div className="w-40 h-56 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-xl shadow-lg flex flex-col items-center justify-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-12 bg-white/10" />
                <div className="text-center z-10">
                  <div className="text-2xl font-bold tracking-tight">HIMALAYA</div>
                  <div className="text-[10px] mt-1 opacity-80 tracking-widest">SINCE 1930</div>
                  <div className="w-16 h-0.5 bg-white/30 mx-auto my-2" />
                  <div className="text-xs font-medium px-3">Purifying Neem Face Wash</div>
                  <div className="text-[10px] mt-1 opacity-70">{product.volume}</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted">
                Image {selectedImage + 1} of {product.images.length}
              </p>
            </div>

            {/* Discount badge */}
            {discount > 0 && (
              <div className="absolute top-3 left-3 bg-danger text-white text-xs font-bold px-2.5 py-1 rounded-full">
                -{discount}%
              </div>
            )}

            {/* SFDA badge */}
            {product.sfdaApproved && (
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-primary text-[10px] font-semibold px-2 py-1 rounded-md border border-primary/20 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                SFDA Approved
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-16 h-16 rounded-lg border-2 overflow-hidden flex items-center justify-center text-xs font-medium transition-all ${
                  selectedImage === i
                    ? "border-primary bg-primary-light"
                    : "border-border bg-white hover:border-primary/40"
                }`}
              >
                <div
                  className={`w-8 h-10 rounded ${
                    selectedImage === i ? "bg-primary/30" : "bg-gray-200"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          {/* Brand & Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="#"
              className="text-sm font-medium text-primary hover:underline"
            >
              {product.brand}
            </a>
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent-light text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
              {product.name}
            </h1>
            <p className="text-sm text-muted mt-1" dir="rtl">
              {product.nameAr}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <StarRating rating={product.rating} size="md" showValue />
            <span className="text-sm text-muted">
              ({product.reviewCount.toLocaleString()} reviews)
            </span>
            <a
              href="#reviews"
              className="text-sm text-primary hover:underline"
            >
              Write a review
            </a>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">
              {product.price.toFixed(2)}{" "}
              <span className="text-lg">SAR</span>
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted line-through">
                  {product.originalPrice.toFixed(2)} SAR
                </span>
                <span className="text-sm font-semibold text-danger bg-danger/10 px-2 py-0.5 rounded-full">
                  Save {(product.originalPrice - product.price).toFixed(2)} SAR
                </span>
              </>
            )}
          </div>

          {/* VAT notice */}
          <p className="text-xs text-muted">
            Inclusive of 15% VAT | SKU: {product.sku}
          </p>

          <hr className="border-border" />

          {/* Volume */}
          <div>
            <span className="text-sm font-medium text-foreground">
              Size:
            </span>
            <span className="ml-2 inline-block px-3 py-1.5 text-sm border-2 border-primary bg-primary-light text-primary rounded-lg font-medium">
              {product.volume}
            </span>
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-success">
                  In Stock
                </span>
                <span className="text-xs text-muted">
                  ({product.stockCount} units available)
                </span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-danger" />
                <span className="text-sm font-medium text-danger">
                  Out of Stock
                </span>
              </>
            )}
          </div>

          {/* Quantity & Cart */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2.5 text-muted hover:text-foreground hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Math.min(product.stockCount, parseInt(e.target.value) || 1))
                  )
                }
                className="w-12 text-center text-sm font-medium border-x border-border py-2.5 bg-transparent focus:outline-none"
              />
              <button
                onClick={() =>
                  setQuantity(Math.min(product.stockCount, quantity + 1))
                }
                className="px-3 py-2.5 text-muted hover:text-foreground hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                addedToCart
                  ? "bg-success text-white"
                  : product.inStock
                  ? "bg-primary text-white hover:bg-primary-dark active:scale-[0.98] shadow-lg shadow-primary/20"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {addedToCart ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Added to Cart!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>

            <button
              onClick={() => setWishlisted(!wishlisted)}
              className={`p-3 rounded-lg border transition-all ${
                wishlisted
                  ? "border-danger/30 bg-danger/5 text-danger"
                  : "border-border text-muted hover:border-danger/30 hover:text-danger"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill={wishlisted ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          {/* Delivery info */}
          <div className="bg-primary-light/50 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Express Delivery - Tomorrow by 9 PM
                </p>
                <p className="text-xs text-muted">
                  Free delivery on orders over 100 SAR | 15 SAR otherwise
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-foreground">
                  100% Genuine Product
                </p>
                <p className="text-xs text-muted">
                  SFDA licensed | Tamper-proof packaging
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Easy Returns within 14 Days
                </p>
                <p className="text-xs text-muted">
                  Hassle-free returns on unopened products
                </p>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>Accepted:</span>
            <div className="flex items-center gap-2">
              {["Visa", "MC", "Mada", "Apple Pay", "STC Pay"].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-white border border-border rounded text-[10px] font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
