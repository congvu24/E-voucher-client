import { Voucher } from "../core/interface/voucher";

export interface IVoucherService {
  createVoucher(): void;
  getVouchers(): Voucher[];
  getVoucherByIds(): Voucher[];
  deleteVoucher(): void;
  editVoucherById(): Voucher;
}
