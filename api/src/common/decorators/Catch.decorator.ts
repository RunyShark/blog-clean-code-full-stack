import { CustomError } from '@domain/errors/custom.error';
import { ApiResponse } from '@domain/rules';
import { ValidPrototype } from './interfaces';

export function Catch(constructor: Function) {
  const originalPrototype = constructor.prototype;
  Object.getOwnPropertyNames(originalPrototype).forEach((name) => {
    if (
      name !== ValidPrototype.constructor &&
      typeof originalPrototype[name] === ValidPrototype.function
    ) {
      const originalFunction = originalPrototype[name];

      originalPrototype[name] = async function (...args: any[]) {
        try {
          return await originalFunction.apply(this, args);
        } catch (error) {
          const errorMessage = (error as Error).message;
          if (error instanceof CustomError)
            return ApiResponse.errorHandle(error.statusError, errorMessage);

          console.error(`Error in method ${name}: ${errorMessage}`);

          return ApiResponse.errorHandle(500, errorMessage);
        }
      };
    }
  });
}
