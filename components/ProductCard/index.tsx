import React from "react";
import { Product } from "../../interfaces/product.interface";
import { Asset } from "../Asset";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { featuredAsset } = product;
  return (
    <a className="block" href="/product/limited-edition-sports-trainer">
      <div className="flex justify-center">
        <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
          New
        </strong>
      </div>

      <Asset
        asset={product.featuredAsset}
        className="object-cover w-full -mt-3 h-[350px] sm:h-[450px]"
      />

      <h5 className="mt-4 text-sm text-gray-700">
        Limited Edition Sports Trainer
      </h5>

      <div className="flex items-center justify-between mt-4 font-medium">
        <p>$189.99</p>

        <p className="text-xs tracking-wide uppercase">6 Colors</p>
      </div>
    </a>
  );
};
