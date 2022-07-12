export type IsAny<T> = 0 extends 1 & T ? true : false

export type IsNumber<T> = T extends number ? true : false

export type IsNever<T> = [T] extends [never] ? true : false

export type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

export type IsInclude<T extends any[], U> = T extends [infer F, ...infer Rest]
  ? IsEqual<U, F> extends true ? true : IsInclude<Rest, U>
  : false

