import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { userRegistrationMutation } from "../../../graphql/user-reg.mutation";
import TailwindInput from "../commons/Input";
import TailwindSubmit from "../commons/Submit";

interface IUserState {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

interface Props {
  registrationSuccess: () => void;
}

const UserRegistration: React.FC<Props> = ({ registrationSuccess }) => {
  const [register, { error }] = useMutation(userRegistrationMutation);
  const registerUser = async (values: IUserState) => {
    const { email, firstName, lastName, phoneNumber, password } = values;
    if (email !== "") {
      const resp = await register({
        variables: {
          email,
          firstName,
          lastName,
          password,
          phoneNumber,
        },
      });
      if (resp.data?.registerCustomerAccount) registrationSuccess();
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        phoneNumber: "",
      }}
      onSubmit={registerUser}
    >
      {!error ? (
        <Form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TailwindInput
              name="firstName"
              placeholder="Enter your firstname"
            />
            <TailwindInput name="lastName" placeholder="Enter your lastname" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TailwindInput
              name="email"
              placeholder="Enter email address to register"
              type="email"
            />

            <TailwindInput
              name="phoneNumber"
              placeholder="Enter phone number for contact"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TailwindInput
              name="password"
              placeholder="Enter your secret to login"
              type="password"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-start">
              <TailwindSubmit name="Create account">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </TailwindSubmit>
              <div className="text-sm text-gray-500 ml-4">
                Already have an account? &nbsp;
                <Link href="/user/login">
                  <a className="underline">Sign In</a>
                </Link>
              </div>
            </div>
          </div>
        </Form>
      ) : (
        <div>Submission error! {error.message}</div>
      )}
    </Formik>
  );
};

export default UserRegistration;
