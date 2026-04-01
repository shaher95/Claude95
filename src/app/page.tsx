import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductHero from "@/components/ProductHero";
import ProductTabs from "@/components/ProductTabs";
import ReviewSection from "@/components/ReviewSection";
import RelatedProducts from "@/components/RelatedProducts";
import Footer from "@/components/Footer";
import { mainProduct, reviews, relatedProducts } from "@/data/product";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Personal Care", href: "#" },
  { label: "Skincare", href: "#" },
  { label: "Face Wash", href: "#" },
  { label: mainProduct.name },
];

export default function ProductPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Product Hero */}
          <div className="mt-2">
            <ProductHero product={mainProduct} />
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12">
            <ProductTabs product={mainProduct} />
          </div>

          {/* Customer Reviews */}
          <div className="mt-12">
            <ReviewSection
              reviews={reviews}
              averageRating={mainProduct.rating}
              totalReviews={mainProduct.reviewCount}
            />
          </div>

          {/* Related Products */}
          <div className="mt-12 mb-12">
            <RelatedProducts products={relatedProducts} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
