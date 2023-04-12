"use client";

import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}: Props) => {
  const router = useRouter();
  return <div>EmptyState</div>;
};

export default EmptyState;
