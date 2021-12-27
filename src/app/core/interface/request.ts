import { VoucherType } from "./voucher";

export type Request = {
  id: UUID;
  userId: UUID;
  status: RequesetStatus;
  voucherId?: UUID;
  note?: string;
  createdAt: DateTimeString;
  type: VoucherType;
};

export enum RequesetStatus {
  pending = "PENDING",
  accepted = "ACCEPTED",
  rejected = "REJECTED",
}
