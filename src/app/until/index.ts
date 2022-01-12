export function cleanObject(obj?: any): any {
  if (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  ) {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([_, v]) => v != null && v !== undefined && v !== ""
      )
    );
  }
  return obj;
}
