export function cleanObject(obj: any): any {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, v]) => v != null && v !== undefined && v !== ""
    )
  );
}
