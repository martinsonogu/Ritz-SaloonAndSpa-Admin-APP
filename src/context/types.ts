export type AuthType = {
  admin: boolean;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  mobileNumber: string;
  permission: string;
  role: UserRoleType;
  superAdmin: boolean;
  token: string;
  tokenType: string;
  username: string;
  verified: boolean;
};

export type UserRoleType = "Admin";
