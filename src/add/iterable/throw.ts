import { IterableX } from '../../iterable/iterablex';
import { throwError as throwErrorStatic } from '../../iterable/throwerror';

/** @nocollapse */
IterableX.throwError = throwErrorStatic;

export declare namespace iterable {
  let throwError: typeof throwErrorStatic;
}

declare module '../../iterable/iterablex' {
  namespace IterableX {
    export { throwErrorStatic as throwError };
  }
}
