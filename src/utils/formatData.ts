export const returnPropertiesWithValue = (object: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(object).filter(([, value]) => !!value));
