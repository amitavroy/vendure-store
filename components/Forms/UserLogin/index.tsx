import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

import { userLoginMutation } from "../../../graphql/user-login.mutation";
import TailwindInput from "../commons/Input";

interface Props {
  loginSuccess: () => void;
}

export const UserLogin: React.FC<Props> = ({ loginSuccess }) => {
  const [login] = useMutation(userLoginMutation);
  const handleLogin = async (values: any) => {
    const resp = await login({
      variables: { username: values.email, password: values.password },
    });
    if (resp.data?.login) loginSuccess();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleLogin}
    >
      <Form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <TailwindInput name="email" placeholder="Enter email address" />

        <TailwindInput
          name="password"
          placeholder="Enter email address"
          type="password"
        />

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account? &nbsp;
            <Link href="/user/register">
              <a className="underline">Sign up</a>
            </Link>
          </p>

          <button
            type="submit"
            className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Sign in
          </button>
        </div>
      </Form>
    </Formik>
  );
};
