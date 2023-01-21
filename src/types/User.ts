export interface IUser {
  name: string;
  email: string;
  password: string;
  city?: string;
  state?: string;
  country?: string;
  occupation?: string;
  phoneNumber?: string;
  transactions: any[];
  role: "user" | "admin" | "superadmin";
}
