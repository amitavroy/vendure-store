import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { Layout } from "../../components/Layout";
import { searchQuery } from "../../graphql/fragments/search.query";

const SearchPage: NextPage = () => {
  const { data, loading, refetch } = useQuery(searchQuery("lap"));
  return (
    <Layout pageTitle="Search">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.search.items.map((item: any) => {
            console.log("item", item);
            return <div key={item.sku}>{item.productName}</div>;
          })}
        </div>
      )}
    </Layout>
  );
};

export default SearchPage;
