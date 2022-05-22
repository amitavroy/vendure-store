import { getCookies } from "cookies-next";
import { NextPage } from "next";

import { Layout } from "../../../components/Layout";

const UserAccountPage: NextPage = () => {
  return <Layout pageTitle={"My account"}></Layout>;
};

export default UserAccountPage;

UserAccountPage.getInitialProps = ({ req, res }) => {
  const cookies = getCookies({ req, res });
  return {
    props: {},
  };
};
