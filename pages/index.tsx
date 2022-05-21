import React from "react";

import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { Products } from "../interfaces/product.interface";
import { VendureService } from "../services/vendure.service";

import type { GetStaticProps, NextPage } from "next";
import { Filters } from "../components/Filters";
interface Props {
  products: Products;
  loading: boolean;
}

const Home: NextPage<Props> = ({ products, loading }) => {
  return (
    <Layout pageTitle="Vendure commerece Store">
      <div className="flex">
        <div className="flex-none w-60 pr-4 pt-6">
          <Filters />
        </div>

        <div className="flex-initial">
          <div className="grid grid-cols-4 gap-2">
            {loading !== true &&
              products.items.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const vendureService = new VendureService();
  const { data, loading } = await vendureService.fetchProducts();

  return {
    props: { products: data.products, loading },
  };
};
