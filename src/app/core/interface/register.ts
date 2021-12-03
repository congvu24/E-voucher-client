export type JobString = string;
export type UserRole = string;
export type Register = {
  id: UUID;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  isActive: boolean;
  isValid: boolean;
  job: JobString;
  identify: string;
  address: string;
  dob: DateTimeString;
  role: UserRole;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
};
