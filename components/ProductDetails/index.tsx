import React, { useState } from "react";
import { Product } from "../../interfaces/product.interface";
import { Asset } from "../Asset";
import { decimalToFull } from "../utils";
import { AddToCart } from "./AddToCart";
import { ProductThumb } from "./ProductThumb";

interface Props {
  product: Product;
}
export const ProductDetails: React.FC<Props> = ({ product }) => {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  return (
    <section>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="aspect-w-1">
              <Asset asset={product.featuredAsset} loading="eager" />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              {product.variants.map((variant) => {
                return (
                  <ProductThumb
                    key={variant.id}
                    asset={product.featuredAsset}
                  />
                );
              })}
            </div>
          </div>

          <div className="sticky top-0">
            <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
              {" "}
              Pre Order{" "}
            </strong>

            <div className="flex justify-between mt-8">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">{product.name}</h1>

                <p className="mt-0.5 text-sm">Highest Rated Product</p>

                <div className="flex mt-2 -ml-0.5">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-lg font-bold">
                ${decimalToFull(product.variants[0].price, true)}
              </p>
            </div>

            <details className="relative mt-4 group">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>{product.description}</p>
                  </div>

                  <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>

              <div className="pb-6 prose max-w-none">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat nam sapiente nobis ea veritatis error consequatur nisi
                  exercitationem iure laudantium culpa, animi temporibus non!
                  Maxime et quisquam amet. A, deserunt!
                </p>
              </div>
            </details>

            <form className="mt-8">
              {product.variantList.totalItems > 1 && (
                <fieldset className="mb-4">
                  <legend className="mb-1 text-sm font-medium">Variants</legend>
                  <div className="flow-root">
                    <div className="flex flex-wrap -m-0.5">
                      {product.variants.map((variant) => {
                        return (
                          <label
                            key={variant.id}
                            htmlFor="color_tt"
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="color"
                              id="color_tt"
                              className="sr-only peer"
                            />

                            <span
                              onClick={(
                                event: React.MouseEvent<HTMLSpanElement>
                              ) => {
                                setVariantId(variant.id);
                              }}
                              className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                            >
                              {variant.name} {variant.id}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>
              )}
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Color</legend>

                <div className="flow-root">
                  <div className="flex flex-wrap -m-0.5">
                    <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="sr-only peer"
                      />

                      <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        Texas Tea
                      </span>
                    </label>

                    <label htmlFor="color_fr" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="sr-only peer"
                      />

                      <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        Fiesta Red
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="sr-only peer"
                      />

                      <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        Cobalt Blue
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="flex mt-8">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    className="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                    onChange={() => {}}
                  />
                </div>

                <AddToCart variantId={variantId} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
