export interface AgencyAnalyticInput {
  thisMonthCitizen: number;
  allCitizen: number;
  pendingCitizen: number;
  countRegisterByStatus: { name: string; value: number }[];
}
