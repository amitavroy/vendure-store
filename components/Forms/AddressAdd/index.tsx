import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import React from "react";

import { addAddress } from "../../../graphql/add-address.mutation";
import TailwindInput from "../commons/Input";

interface Props {}

export const AddressAdd: React.FC<Props> = ({}) => {
  const [addAddressMutation] = useMutation(addAddress);
  const handleAddressAdd = async (values: any) => {
    const resp = await addAddressMutation({
      variables: {
        countryCode: values.country,
        fullName: values.fullName,
        streetLine1: values.streetLine1,
        streetLine2: values.streetLine2,
        city: values.city,
        province: values.province,
        phoneNumber: values.phoneNumber,
        postalCode: values.postalCode,
      },
    });
    // console.log(resp.data.createCustomerAddress);
    // if (resp.data?.login) loginSuccess();
    if (resp.data.createCustomerAddress) alert("Address added");
  };
  return (
    <Formik
      initialValues={{
        fullName: "",
        city: "",
        phoneNumber: "",
        postalCode: "",
        province: "",
        streetLine1: "",
        streetLine2: "",
        country: "IN",
      }}
      onSubmit={handleAddressAdd}
    >
      <Form className="mt-8 mb-0 space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 sm:gap-2 md:gap-4">
          <TailwindInput name="fullName" placeholder="Enter address name" />
          <TailwindInput name="city" placeholder="Enter city" />
          <TailwindInput name="phoneNumber" placeholder="Enter phone number" />
          <TailwindInput name="postalCode" placeholder="Enter postalCode" />
          <TailwindInput name="province" placeholder="Enter province" />
          <TailwindInput name="streetLine1" placeholder="Enter streetLine1" />
          <TailwindInput name="streetLine2" placeholder="Enter streetLine2" />
          <TailwindInput name="country" placeholder="Enter country" />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block px-2 py-1 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Sign in
          </button>
        </div>
      </Form>
    </Formik>
  );
};
