import { IterableX } from '../../iterable/iterablex';
import { map } from '../../iterable/operators/map';

/**
 * @ignore
 */
export function mapProto<T, U>(
  this: IterableX<T>,
  fn: (value: T, index: number) => U,
  thisArg?: any
): IterableX<U> {
  return map<T, U>(fn, thisArg)(this);
}

IterableX.prototype.map = mapProto;

declare module '../../iterable/iterablex' {
  interface IterableX<T> {
    map: typeof mapProto;
  }
}
