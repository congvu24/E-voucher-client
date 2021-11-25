export type Request = {
  id: UUID;
  userId: UUID;
  status: RequesetStatus;
  voucherId?: UUID;
  note?: string;
  createdAt: DateTimeString;
};

export enum RequesetStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}
