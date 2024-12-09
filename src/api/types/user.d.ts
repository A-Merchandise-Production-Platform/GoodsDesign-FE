import { ODataQuery } from 'odata-query';

export interface User {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string | null;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string | null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  gender: boolean;
  dateOfBirth: string;
  imageUrl: string;
  isActive: boolean;
  isDeleted: boolean;
  address: string;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string | null;
  updatedBy: string | null;
  roleId: string;
  role?: Role;
}

export interface Role {
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
  users?: string[];
}
