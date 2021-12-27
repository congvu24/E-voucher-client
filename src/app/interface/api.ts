export interface ApiResponse<T> {
  data: T;
  meta: Meta;
}
export type Meta = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
};
