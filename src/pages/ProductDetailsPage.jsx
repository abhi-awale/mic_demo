import { useParams } from "react-router-dom";

import {
  HeroSection,
  ProductInfoSection,
  FeatureHighlights,
  DownloadsSection,
} from "../components/product-details";
import FloatingBackButton from "../components/FloatingBackButton";
import ProductTabs from '../components/ProductTabs/ProductTabs';

export default function ProductDetailsPage() {
  const { slug } = useParams();

  const product = {
    name: "1N4007",
    slug: "1n4007",
    subtitle: "General Purpose Rectifier Diode",
    image:
      "https://images.unsplash.com/photo-1640955785023-1854685dae05?q=80&w=1973&auto=format&fit=crop",
    description:
      "The 1N4007 is a general purpose silicon rectifier diode designed for high reliability and performance.",
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingBackButton />

      <HeroSection product={product} />
      <ProductInfoSection product={product} />
      <FeatureHighlights />
      {/* <ProductTabs product={product} /> */}
      <ProductTabs product={product}/>
      <DownloadsSection />
    </div>
  );
}