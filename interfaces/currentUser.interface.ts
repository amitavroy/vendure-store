export interface CurrentUser {
  addresses: Array<Address>;
}

export interface Address {
  id: number;
  city?: string;
  fullName?: string;
  phoneNumber?: string;
  postalCode?: string;
  province?: string;
  streetLine1?: string;
  streetLine2?: string;
  country: { code: string; name: string };
}
