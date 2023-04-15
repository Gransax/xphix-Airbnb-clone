import React from "react";
import { SafeListing, SafeUser } from "../types";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";
import Heading from "../components/Heading";

type Props = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};

const FavoriteClient = ({ listings, currentUser }: Props) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorited!"
      />
      <div
        className="
            mt-10 
            grid 
            grid-cols-1 
            gap-8
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
        "
      >
        {listings.map((item) => (
          <ListingCard currentUser={currentUser} key={item.title} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default FavoriteClient;
