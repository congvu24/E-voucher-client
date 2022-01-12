import { VoucherType } from "../core/interface/voucher";

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

export interface SupplierAnalyticPort {
  newRequest: number;
  newCitizen: number;
  countVoucher: number;
  countDealer: number;
  countVoucherByType: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    [VoucherType.help]: number;
    [VoucherType.support]: number;
    [VoucherType.urgent]: number;
  };
}
