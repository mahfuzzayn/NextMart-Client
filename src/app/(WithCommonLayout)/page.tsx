import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import FlashDeals from "@/components/modules/home/FlashDeals";
import HeroSection from "@/components/modules/home/HeroSection";
import TopBrand from "@/components/modules/home/TopBrand";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <Category />
            <FeaturedProducts />
            <FlashDeals />
            <TopBrand />
        </div>
    );
};

export default HomePage;
