export function cleanObject(obj?: any): any {
  if (obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([_, v]) => v != null && v !== undefined && v !== ""
      )
    );
  }
  return obj;
}
