import { Address } from "../../interfaces/currentUser.interface";

interface Props {
  address: Address;
}

export const AddressCard: React.FC<Props> = ({ address }) => {
  return (
    <div className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg">
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          {address.fullName && (
            <h5 className="text-xl font-bold text-gray-900">
              {address.fullName}
            </h5>
          )}
        </div>

        <div className="flex-shrink-0 hidden ml-3 sm:block">
          <img
            className="object-cover w-16 h-16 rounded-lg shadow-sm"
            src="https://www.hyperui.dev/photos/man-5.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">
          {address.streetLine1 && (
            <span>
              {address.streetLine1} <br />
            </span>
          )}
          {address.streetLine2 && (
            <span>
              {address.streetLine2} <br />
            </span>
          )}
          {address.city && (
            <span>
              {address.city} <br />
            </span>
          )}
          {address.province && (
            <span>
              {address.province} <br />
            </span>
          )}
          {address.postalCode && (
            <span>
              {address.postalCode} <br />
            </span>
          )}
        </p>
      </div>

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Country</dt>
          <dd className="text-xs text-gray-500">{address.country.name}</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">Added on</dt>
          <dd className="text-xs text-gray-500">{address.createdAt}</dd>
        </div>
      </dl>
    </div>
  );
};
