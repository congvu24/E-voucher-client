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
  {
    iconType: "pie-chart",
    label: "Dashboard",
    path: "/supplier/statistic",
  },
  { iconType: "history", label: "Create history", path: "/supplier/vouchers" },
  { iconType: "fork", label: "Voucher request", path: "/supplier/request" },
];
export const AGENCY_ROUTES: UserRoute[] = [
  // { iconType: "home", path: "/agency" },
  { iconType: "home", label: "Requests", path: "/goverment" },
];
// api route

export const PACKAGE_ENDPOINT = "package";
export const VOUCHER_ENDPOINT = "voucher";
export const LOGIN_ENDPOINT = "auth/login";
export const VOUCHER_REQUEST_ENDPOINT = "voucher-request";
