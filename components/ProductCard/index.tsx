import Link from "next/link";
import React from "react";

import { Product } from "../../interfaces/product.interface";
import { Asset } from "../Asset";
import { decimalToFull } from "../utils";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { featuredAsset, slug, name } = product;
  return (
    <Link href={`/product/${slug}`}>
      <a className="block m-2">
        <div className="flex justify-center">
          <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
            New
          </strong>
        </div>

        <Asset
          asset={featuredAsset}
          className="object-cover w-full -mt-3 h-[350px] sm:h-[450px]"
        />

        <h5 className="mt-2 text-md text-blue-800">{name}</h5>

        <div className="flex items-center justify-between mt-1 font-medium">
          <p>${decimalToFull(product.variants[0].price, true)}</p>

          {product.variantList.totalItems > 1 && (
            <p className="text-xs tracking-wide uppercase">
              {product.variantList.totalItems} Variants
            </p>
          )}
        </div>
      </a>
    </Link>
  );
};
