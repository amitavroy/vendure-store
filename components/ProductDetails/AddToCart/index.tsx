import { useMutation } from "@apollo/client";
import React from "react";
import { addToCartMutation } from "../../../graphql/add-to-card.mutation";

interface Props {
  variantId: number;
}

export const AddToCart: React.FC<Props> = ({ variantId }) => {
  const [addToCart] = useMutation(addToCartMutation);
  const handleAddToCart = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    alert(variantId);
    const resp = await addToCart({
      variables: {
        variantId,
      },
    });
  };
  return (
    <button
      type="submit"
      className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};
