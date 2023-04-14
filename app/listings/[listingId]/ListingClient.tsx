"use client";

import { categories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import React, { useMemo } from "react";

type Props = {
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  reservation?: Reservation;
};

const ListingClient = ({ listing, currentUser, reservation }: Props) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return <div>ListingClient</div>;
};

export default ListingClient;
