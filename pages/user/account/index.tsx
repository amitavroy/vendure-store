import { useQuery } from "@apollo/client";
import { getCookies } from "cookies-next";
import { NextPage } from "next";
import React, { useState } from "react";
import { AddressCard } from "../../../components/AddressCard";
import { Asset } from "../../../components/Asset";
import { AddressAdd } from "../../../components/Forms/AddressAdd";
import { Layout } from "../../../components/Layout";
import { decimalToFull } from "../../../components/utils";
import { currentUserQuery } from "../../../graphql/current-user.query";
import { userAccountQuery } from "../../../graphql/user-account.query";
import { CurrentUser } from "../../../interfaces/currentUser.interface";
import { ActiveOrder } from "../../../interfaces/order.interface";

const UserAccountPage: NextPage = () => {
  const [isOpenAddress, setIsOpenAddress] = useState(false);
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
          {activeOrder?.total && (
            <h2 className="text-2xl">
              Active order total: ${decimalToFull(activeOrder.total)}
            </h2>
          )}
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
      {!userLoading && currentUser?.addresses ? (
        <React.Fragment>
          <div className="mt-4">
            <h2 className="text-2xl mb-2">My addresses</h2>
            <button
              className="rounded py-1 px-2 bg-green-500 text-white text-sm"
              onClick={(event) => setIsOpenAddress(!isOpenAddress)}
            >
              Add address
            </button>
            {isOpenAddress && <AddressAdd />}
          </div>
          <div className="md:grid md:gap-4 md:grid-cols-3 mt-4 sm:gap-0 sm:grid-cols-1">
            {currentUser.addresses.length > 0 &&
              currentUser.addresses.map((address) => {
                return <AddressCard key={address.id} address={address} />;
              })}
          </div>
        </React.Fragment>
      ) : (
        <div>No user data to show</div>
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
