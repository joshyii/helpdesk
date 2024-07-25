import { Role } from './role';

export class User {

  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  contactNumber?: string;
  role?: Role;
  address?: string;
  city?: string;
  postalCode?: string;
  state?: string;
  country?: string;
  password?: string;
  confirPassword?: string;
  isDeleting?: boolean;
  
}
