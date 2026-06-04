import FeaturedProducts from "../components/FeaturedProducts";
import HeroBanner from "../components/HeroBanner";
import ManufacturingExcellence from "../components/ManufacturingExcellence";
import ProductCategories from "../components/ProductCategories";
import WhyChooseMICIndia from "../components/WhyChooseMICIndia";


function HomePage(){
    return(
        <>
            <HeroBanner />
            <ProductCategories />
            <WhyChooseMICIndia />
            <FeaturedProducts /> 
            <ManufacturingExcellence />
        </>
    )
}

export default HomePage;