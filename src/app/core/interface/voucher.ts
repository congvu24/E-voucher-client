export interface Voucher {
  id: UUID;
  value: number;
  status: VoucherStatus;
  validDate: DateTimeString;
  type: VoucherType;
  createdAt: DateTimeString;
  udatedAt: DateTimeString;
}

export enum VoucherStatus {
  unuse = "UNUSE",
  used = "USED",
  cancel = "CANCEL",
  deleted = "DELETED",
}
export enum VoucherType {
  support = "SUPPORT",
  help = "HELP",
  urgent = "URGENT",
}
