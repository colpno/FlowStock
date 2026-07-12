"use client";

import type { PaginationProviderValue } from "./pagination.types";

import { createContext, useContext } from "react";

const defaultValue: PaginationProviderValue = {
  page: 1,
  pageSize: 10,
  totalItems: 1,
  pageCount: 1,
  onPageChange: () => {},
};

const PaginationProvider = createContext<Partial<PaginationProviderValue>>(defaultValue);

export const usePaginationProvider = () => {
  const ctx = useContext(PaginationProvider) as PaginationProviderValue;

  if (!ctx) {
    throw new Error("PaginationProvider must be used within usePaginationProvider.");
  }

  return ctx;
};

export default PaginationProvider;
