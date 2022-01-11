export interface AgencyAnalyticInput {
  thisMonthCitizen: number;
  allCitizen: number;
  pendingCitizen: number;
  countRegisterByStatus: { name: string; value: number }[];
}
export interface DealerAnalyticInputPort {
  allOrder: number;
  thisMonthOrder: number;
  sumValue: number;
  thisMonthValue: number;
  numberPackage: number;
  sumMoneyByPackage: {
    name: string;
    value: number;
  }[];
  packageRank: {
    name: string;
    value: number;
    thumbnail: string;
    numberClaim: number;
  }[];
}
