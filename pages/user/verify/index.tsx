import { NextPage } from "next";
import { useRouter } from "next/router";
import VerifyEmail from "../../../components/Forms/VerifyEmail";
import { Layout } from "../../../components/Layout";

const VerifyPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout pageTitle="Verify your email address">
      <div className="flex justify-center text-center">
        <div className="grid grid-col-1 gap-4">
          <h2>Verify your email address</h2>
          <VerifyEmail onVerificationSuccess={() => router.push("/")} />
        </div>
      </div>
    </Layout>
  );
};

export default VerifyPage;
