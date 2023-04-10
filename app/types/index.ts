import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdDate" | "updatedDate" | "emailVerified"
> & {
  createdDate: string;
  updatedDate: string;
  emailVerified: string | null;
};
