import prisma from "@/app/libs/prismadb";
import { SafeReservation } from "../types";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { userId, listingId, authorId } = params;
    const query: any = {};
    if (listingId) {
      query.listingId = listingId;
    }
    if (userId) {
      query.userId = userId;
    }
    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const safeReservations: SafeReservation[] = reservations.map(
      (reservation) => ({
        ...reservation,
        startDate: reservation.startDate.toISOString(),
        endDate: reservation.endDate.toISOString(),
        createdAt: reservation.createdAt.toISOString(),
        listing: {
          ...reservation.listing,
          createdAt: reservation.listing.createdAt.toISOString(),
        },
      })
    );

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
