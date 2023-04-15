import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ListingCard from "../components/listings/ListingCard";
import FavoriteClient from "./FavoriteClient";

const FavoritePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const favorites = await getFavoriteListings();
  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoriteClient listings={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritePage;
