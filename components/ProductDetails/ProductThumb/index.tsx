import React from "react";
import { AssetType } from "../../../interfaces/commons/asset-type.interface";
import { Asset } from "../../Asset";

interface Props {
  asset: AssetType;
}

export const ProductThumb: React.FC<Props> = ({ asset }) => {
  return (
    <div className="aspect-w-1">
      <Asset asset={asset} />
    </div>
  );
};
