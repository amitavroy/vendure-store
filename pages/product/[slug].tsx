import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { VendureService } from "../../services/vendure.service";
import { ParsedUrlQuery } from "querystring";
import { Product } from "../../interfaces/product.interface";
import { ProductDetails } from "../../components/ProductDetails";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  product: Product;
}

const ProductDetailPage: NextPage<Props> = ({ product }) => {
  return (
    <Layout pageTitle={product.name}>
      <ProductDetails product={product} />
    </Layout>
  );
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const vendureService = new VendureService();
  const resp = await vendureService.fetchProductSlugs();
  const paths = resp.data.products.items.map((product: any) => ({
    params: { id: product.id, slug: product.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const vendureService = new VendureService();
  const response = await vendureService.fetchProductBySlugs(slug);
  return {
    props: {
      slug: context.params?.slug,
      product: response.data.product,
    },
  };
};
