"use client";

import { SafeUser } from "@/app/types";
import React from "react";
import { CategoryType } from "../navbar/Categories";
import useCountries from "@/app/hooks/useCountries";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

type Props = {
  user: SafeUser;
  category: CategoryType | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
};

const ListingInfo = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}: Props) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latIng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            flex
            flex-row
            items-center
            gap-2
            text-xl
            font-semibold
            "
        >
          Hosted by {user?.name}
          <Avatar src={user?.image} />
        </div>
        <div
          className="
            flex flex-row items-center gap-4 font-light text-neutral-500
            "
        >
          <div> {guestCount} guests</div>
          <div> {roomCount} rooms</div>
          <div> {bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && <ListingCategory {...category} />}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
