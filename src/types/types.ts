export type Redefine<T, K extends keyof T, V> = Omit<T, K> & { [P in K]: V };

export type DataObject<T = unknown> = Record<string, T>;
