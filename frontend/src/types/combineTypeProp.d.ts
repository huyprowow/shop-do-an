export interface i_combine_account_signIn_props {
    accountData: i_accountStateData[];
    getAllAccRequest: () => void;
    signInData: i_signIn_signOut;
    signInRequest: () => void;
  }