import { User, Listing, Reservation } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
};

export type SafeUser = Omit<
  User,
  "createdDate" | "updatedDate" | "emailVerified"
> & {
  createdDate: string;
  updatedDate: string;
  emailVerified: string | null;
};
