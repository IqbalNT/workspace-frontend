export interface Auth {
  isAuthenticated?: boolean;
  userInformation?: any;
}
export interface UserInfo {
  name: string;
  email: string;
  cellNo: string;
  password: string;
  _id?: string;
}
