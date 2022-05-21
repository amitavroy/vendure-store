import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { collectionQuery } from "../../graphql/collections.query";
import { CollectionType } from "../../interfaces/commons/collection.type";
import { FilterItem } from "./FilterItem";

export const Filters = () => {
  const { loading, error, data } = useQuery(collectionQuery);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (data) {
      setItems(data.collections.items);
    }
  }, [data]);
  return (
    <details open className="overflow-hidden border border-gray-200 rounded">
      <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
        <span className="text-sm font-medium">Toggle Filters</span>

        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>

      <form action="" className="border-t border-gray-200 lg:border-t-0">
        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Collections
          </legend>

          <div className="px-5 py-6 space-y-2">
            {loading && <div>Loading categories...</div>}
            {!loading &&
              items.length > 0 &&
              items.map((result: CollectionType) => {
                const { name, slug } = result;
                return <FilterItem name={name} slug={slug} key={slug} />;
              })}
          </div>
        </fieldset>

        {/* <div>
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Age
            </legend>

            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                <input
                  id="3+"
                  type="checkbox"
                  name="age[3+]"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label htmlFor="3+" className="ml-3 text-sm font-medium">
                  3+
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="8+"
                  type="checkbox"
                  name="age[8+]"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label htmlFor="8+" className="ml-3 text-sm font-medium">
                  8+
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="12+"
                  type="checkbox"
                  name="age[12+]"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label htmlFor="12+" className="ml-3 text-sm font-medium">
                  12+
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="16+"
                  type="checkbox"
                  name="age[16+]"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label htmlFor="16+" className="ml-3 text-sm font-medium">
                  16+
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-gray-500 underline"
                >
                  Reset Age
                </button>
              </div>
            </div>
          </fieldset>
        </div> */}

        <div className="flex justify-between px-5 py-3 border-t border-gray-200">
          <button
            name="reset"
            type="button"
            className="text-xs font-medium text-gray-600 underline rounded"
          >
            Reset All
          </button>

          <button
            name="commit"
            type="button"
            className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </details>
  );
};
