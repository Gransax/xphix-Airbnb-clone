"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

type Props = {
  id: string;
  title: string;
  imageSrc: string;
  locationValue: string;
  currentUser?: SafeUser | null;
};

const ListingHead = ({
  id,
  title,
  imageSrc,
  locationValue,
  currentUser,
}: Props) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
            relative
            h-[60vh]
            w-full
            overflow-hidden
            rounded-xl
      "
      >
        <Image
          alt="image"
          src={imageSrc}
          fill
          className=" w-full object-cover"
        />
        <div className="absolute right-5 top-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
