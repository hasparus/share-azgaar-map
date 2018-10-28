import { dbx } from './peripherals/dropbox';

export const isAdminId = async (id: string) =>
  id === (await dbx.usersGetCurrentAccount(undefined)).account_id;
