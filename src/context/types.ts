export type PermissionsType =
  | 'ROLE_KYC_CREATE'
  | 'ROLE_KYC_DELETE'
  | 'ROLE_KYC_UPDATE'
  | 'ROLE_KYC_VIEW'
  | 'ROLE_ORDER_VIEW'
  | 'ROLE_PAYMENT_CREATE'
  | 'ROLE_PAYMENT_DELETE'
  | 'ROLE_PAYMENT_UPDATE'
  | 'ROLE_PAYMENT_VIEW'
  | 'ROLE_PERMISSION_CREATE'
  | 'ROLE_PERMISSION_DELETE'
  | 'ROLE_PERMISSION_UPDATE'
  | 'ROLE_PERMISSION_VIEW'
  | 'ROLE_ROLE_CREATE'
  | 'ROLE_ROLE_DELETE'
  | 'ROLE_ROLE_UPDATE'
  | 'ROLE_ROLE_VIEW'
  | 'ROLE_USER_CREATE'
  | 'ROLE_USER_DELETE'
  | 'ROLE_USER_UPDATE'
  | 'ROLE_USER_VIEW'
  | 'ROLE_WALLET_CREATE'
  | 'ROLE_WALLET_DELETE'
  | 'ROLE_WALLET_EXCHANGE'
  | 'ROLE_WALLET_FUND'
  | 'ROLE_WALLET_UPDATE'
  | 'ROLE_WALLET_VIEW';
  
export type AuthType = {
    admin: boolean;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    mobileNumber: string;
    permission: Array<PermissionsType>;
    role: UserRoleType;
    superAdmin: boolean;
    token: string;
    tokenType: string;
    username: string;
    verified: boolean;
  };

  export type UserRoleType = 'Admin' | 'Merchant';