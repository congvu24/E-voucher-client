export type Package = {
  id: UUID;
  dealerId: UUID;
  name: string;
  description: string;
  min: string;
  max: string;
  isShow: boolean;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
};
