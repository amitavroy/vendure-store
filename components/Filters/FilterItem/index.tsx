import React from "react";

interface Props {
  name: string;
  slug: string;
}

export const FilterItem: React.FC<Props> = ({ name, slug }) => {
  return (
    <div className="flex items-center">
      <input
        id={slug}
        type="checkbox"
        name={`type[${slug}]`}
        className="w-5 h-5 border-gray-300 rounded"
      />

      <label htmlFor={slug} className="ml-3 text-sm font-medium cursor-pointer">
        {name}
      </label>
    </div>
  );
};
