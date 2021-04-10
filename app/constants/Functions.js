export function getBooleanValue(v) {
  return typeof v === 'boolean'
    ? v
    : typeof v === 'string'
    ? v?.toLowerCase() === 'true'
    : false;
}
