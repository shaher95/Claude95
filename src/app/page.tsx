import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductHero from "@/components/ProductHero";
import ProductBenefits from "@/components/ProductBenefits";
import ProductTabs from "@/components/ProductTabs";
import ReviewSection from "@/components/ReviewSection";
import RoutineBuilder from "@/components/RoutineBuilder";
import RelatedProducts from "@/components/RelatedProducts";
import ProductFAQ from "@/components/ProductFAQ";
import PromoBanner from "@/components/PromoBanner";
import ShareProduct from "@/components/ShareProduct";
import DeliveryEstimator from "@/components/DeliveryEstimator";
import TrustBadges from "@/components/TrustBadges";
import StickyCartBar from "@/components/StickyCartBar";
import SocialProof from "@/components/SocialProof";
import BackToTop from "@/components/BackToTop";
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

          {/* Product Hero - Main 2-column layout */}
          <div className="mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main content area */}
              <div className="lg:col-span-9">
                <ProductHero product={mainProduct} />

                {/* Share bar */}
                <div className="mt-6 pt-4 border-t border-border">
                  <ShareProduct productName={mainProduct.name} />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-3 space-y-4">
                <DeliveryEstimator />
                <TrustBadges />
              </aside>
            </div>
          </div>

          {/* Product Benefits */}
          <div className="mt-14">
            <ProductBenefits />
          </div>

          {/* Product Details Tabs */}
          <div className="mt-14">
            <ProductTabs product={mainProduct} />
          </div>

          {/* Promotional Banner */}
          <div className="mt-14">
            <PromoBanner />
          </div>

          {/* Build Your Skincare Routine */}
          <div className="mt-14">
            <RoutineBuilder />
          </div>

          {/* Customer Reviews */}
          <div className="mt-14">
            <ReviewSection
              reviews={reviews}
              averageRating={mainProduct.rating}
              totalReviews={mainProduct.reviewCount}
            />
          </div>

          {/* Related Products */}
          <div className="mt-14">
            <RelatedProducts products={relatedProducts} />
          </div>

          {/* FAQ */}
          <div className="mt-14 mb-14">
            <ProductFAQ />
          </div>
        </div>
      </main>

      <Footer />

      {/* Overlays */}
      <StickyCartBar product={mainProduct} />
      <SocialProof />
      <BackToTop />
    </>
  );
}
