import { Looker31SDK } from '@looker/sdk';
import { LookerNodeSDK } from '@looker/sdk-node';

let sdk: Looker31SDK;

const looker = async (): Promise<Looker31SDK> => {
  if (sdk) {
    return sdk;
  }

  // create a Node SDK object for API 3.1
  sdk = LookerNodeSDK.init31();

  // retrieve your user account to verify correct credentials
  const me = await sdk.ok(
    sdk.me('id, first_name, last_name, display_name, email, personal_space_id, home_space_id, group_ids, role_ids')
  );

  console.log({ me });

  return sdk;
};

export const logout = async () => {
  await sdk.authSession.logout();

  if (!sdk.authSession.isAuthenticated()) {
    console.log('Logout successful');
  }
};

export default looker;
