//side navigation route
export const DEALER_ROUTES: UserRoute[] = [
  {
    iconType: "scan",
    label: "Scan voucher",
    path: "/dealer/voucher/select-service",
  },
  { iconType: "wallet", label: "Manage service", path: "/dealer/services" },
  { iconType: "tags", label: "Claimed voucher", path: "/dealer/vouchers" },
];
export const SUPPLIER_ROUTES: UserRoute[] = [
  // { iconType: "", path: "/" },
  // { iconType: "", path: "/supplier/vouchers" },
  { iconType: "home", label: "Voucher request", path: "/supplier" },
  { iconType: "history", label: "Create history", path: "/supplier/vouchers" },
];
export const AGENCY_ROUTES: UserRoute[] = [
  // { iconType: "home", path: "/agency" },
  { iconType: "home", label: "Requests", path: "/agency" },
];

// api route

export const PACKAGE_ENDPOINT = "package";
export const LOGIN_ENDPOINT = "auth/login";
