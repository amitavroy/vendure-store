import Image from "next/image";
import React from "react";
import { AssetType } from "../../interfaces/commons/asset-type.interface";

interface Props {
  asset: AssetType;
  loading?: "lazy" | "eager";
  className?: string;
}

export const Asset: React.FC<Props> = ({ asset, loading, className }) => {
  const { width, height, name, preview } = asset;
  return (
    <Image
      className={className ? className : ""}
      width={width}
      height={height}
      src={preview}
      alt={name || ""}
      loading={loading ? loading : "lazy"}
    />
  );
};
