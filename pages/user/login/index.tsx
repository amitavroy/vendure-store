import { getCookie } from "cookies-next";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { UserLogin } from "../../../components/Forms/UserLogin";
import { Layout } from "../../../components/Layout";

const UserLoginPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const session = getCookie("session");
    if (session !== undefined) router.push("/");
  }, []);
  return (
    <Layout pageTitle={"Login to EShop"}>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <UserLogin loginSuccess={() => router.push("/")} />
      </div>
    </Layout>
  );
};

export default UserLoginPage;

UserLoginPage.getInitialProps = ({ req, res }) => {
  const cookies = getCookie("session", { req, res });
  if (cookies !== undefined) res?.writeHead(307, { Location: "/" }).end();
  return {
    props: {},
  };
};
