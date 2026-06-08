import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FloatingBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedCategory =
    location.state?.category;

  const handleBack = () => {
    navigate("/products", {
      state: {
        selectedCategory,
      },
    });
  };

  return (
    <button
      onClick={handleBack}
      className="
        fixed
        left-4
        top-20
        z-50
        flex
        items-center
        gap-2
        rounded-full
        bg-white
        px-4
        py-3
        shadow-lg
        border
        hover:shadow-xl
        transition
      "
    >
      <ArrowLeft size={18} />
      <span className="hidden sm:inline">
        Back
      </span>
    </button>
  );
}