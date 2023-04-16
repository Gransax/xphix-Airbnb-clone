import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingsParams } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

type Props = {
  searchParams: IListingsParams;
};

const Home = async ({ searchParams }: Props) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            grid 
            grid-cols-1 
            gap-8 
            pt-24 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
          "
        >
          {listings.map((item) => (
            <ListingCard
              currentUser={currentUser}
              key={item.title}
              data={item}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
