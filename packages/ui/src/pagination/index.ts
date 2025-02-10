"use client";

import { Platform } from "react-native";

import {
  Pagination as NativePagination,
  PaginationProps as NativePaginationProps,
} from "./pagination.native";
import {
  Pagination as WebPagination,
  PaginationProps as WebPaginationProps,
} from "./pagination.web";

export type PaginationProps<T> = Platform["OS"] extends "web"
  ? WebPaginationProps<T>
  : NativePaginationProps<T>;

export const Pagination =
  Platform.OS === "web" ? WebPagination : NativePagination;
