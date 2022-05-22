import { getCookie } from "cookies-next";
import { NextPage } from "next";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import UserRegistration from "../../../components/Forms/UserRegistration";
import { Layout } from "../../../components/Layout";

const RegistrationPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout pageTitle={"My account"}>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <UserRegistration
            registrationSuccess={() => {
              router.push("/user/verify");
            }}
          />
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <Image
            src="https://www.hyperui.dev/photos/team-1.jpeg"
            width="786"
            height="524"
            alt="User registration"
          />
        </div>
      </section>
    </Layout>
  );
};

export default RegistrationPage;

RegistrationPage.getInitialProps = ({ req, res }) => {
  const cookies = getCookie("session", { req, res });
  if (cookies !== undefined) res?.writeHead(307, { Location: "/" }).end();
  return {
    props: {},
  };
};
