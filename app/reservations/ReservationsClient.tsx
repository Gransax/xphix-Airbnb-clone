"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

type Props = {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
};

const ReservationsClient = ({ reservations, currentUser }: Props) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation canceled!");
          router.refresh();
        })
        .catch(() => {
          toast.error("Something when wrong.");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
      <div
        className="
            mt-10 
            grid 
            grid-cols-1 
            gap-8
            sm:col-span-2
            md:col-span-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            "
      >
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
