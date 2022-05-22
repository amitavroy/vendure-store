import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import { userVerifyMutation } from "../../../graphql/user-verify.mutation";
import TailwindInput from "../commons/Input";
import TailwindSubmit from "../commons/Submit";

interface Props {
  onVerificationSuccess: () => void;
}

const VerifyEmail: React.FC<Props> = ({ onVerificationSuccess }) => {
  const [verifyEmail, { data, loading, error }] =
    useMutation(userVerifyMutation);
  return (
    <Formik
      initialValues={{ token: "" }}
      onSubmit={async (values) => {
        const resp = await verifyEmail({ variables: { token: values.token } });
        if (resp.data?.verifyCustomerAccount) onVerificationSuccess();
      }}
    >
      <Form>
        <div className="mb-2">
          <TailwindInput name="token" placeholder="Enter verification token" />
        </div>
        <div>
          <TailwindSubmit name="Verify email"></TailwindSubmit>
        </div>
      </Form>
    </Formik>
  );
};

export default VerifyEmail;
