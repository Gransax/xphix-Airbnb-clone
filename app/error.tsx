"use client";

import { useEffect } from "react";

import React from "react";
import EmptyState from "./components/EmptyState";

type Props = {
  error: Error;
};

const ErrorState = ({ error }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <EmptyState title="Uh Oh" subtitle="Something went wrong." />;
};

export default ErrorState;
