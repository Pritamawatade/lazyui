import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProductCardProps {
  name?: string;
  price?: number;
  oldPrice?: number;
  rating?: number;
  image?: string;
  onBuy?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name = "Modern Product",
  price = 49.99,
  oldPrice = 79.99,
  rating = 4.5,
  image = "https://placehold.co/600x400/EEE/31343C",
  onBuy = () => alert("Buy now clicked!"),
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-full max-w-sm bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:bg-zinc-900 dark:border-zinc-700"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            ₹{price.toFixed(2)}
          </span>
          <span className="line-through text-gray-500 dark:text-gray-400">
            ₹{oldPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < Math.floor(rating) ? "#facc15" : "none"}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
            ({rating})
          </span>
        </div>

        <button
          onClick={onBuy}
          className="mt-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
