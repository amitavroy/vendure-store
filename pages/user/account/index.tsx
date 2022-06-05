import { useQuery } from "@apollo/client";
import { getCookies } from "cookies-next";
import { NextPage } from "next";
import { Asset } from "../../../components/Asset";
import { Layout } from "../../../components/Layout";
import { decimalToFull } from "../../../components/utils";
import { currentUserQuery } from "../../../graphql/current-user.query";
import { userAccountQuery } from "../../../graphql/user-account.query";
import { CurrentUser } from "../../../interfaces/currentUser.interface";
import { ActiveOrder } from "../../../interfaces/order.interface";

const UserAccountPage: NextPage = () => {
  const { data, loading, error } = useQuery(userAccountQuery);
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(currentUserQuery);
  const activeOrder: ActiveOrder = data?.activeOrder || null;
  const currentUser: CurrentUser = userData?.activeCustomer || null;

  return (
    <Layout pageTitle={"My account"}>
      {!loading && (
        <div>
          <h2>Active order total: ${decimalToFull(activeOrder.total)}</h2>
          {activeOrder !== null &&
            activeOrder.lines.map((item) => {
              return (
                <div
                  key={item.productVariant.id}
                  className="border m-2 px-2 py-6 rounded shadow-sm w-1/3"
                >
                  <div className="flex justify-between">
                    <div>
                      <span className="font-bold">
                        {item.productVariant.name}
                      </span>{" "}
                      <br /> ${decimalToFull(item.productVariant.price)}
                      <br />{" "}
                      <div className="py-2 mt-4 cursor-pointer">Remove</div>
                    </div>
                    <div className="h-[80px] w-[120px] overflow-hidden">
                      <Asset
                        asset={item.productVariant.product.featuredAsset}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <hr />
      {!userLoading && (
        <div>
          {currentUser.addresses.length > 0 &&
            currentUser.addresses.map((address) => {
              return <div key={address.id}>{address.fullName}</div>;
            })}
        </div>
      )}
    </Layout>
  );
};

export default UserAccountPage;

UserAccountPage.getInitialProps = ({ req, res }) => {
  const cookies = getCookies({ req, res });
  return {
    props: {},
  };
};
