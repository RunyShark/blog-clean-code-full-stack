export enum ValidPrototype {
  constructor = 'constructor',
  function = 'function',
}

export function BindMethods<T extends new (...args: any[]) => any>(
  originalConstructor: T
): T {
  return class extends originalConstructor {
    constructor(...args: any[]) {
      super(...args);
      Object.getOwnPropertyNames(originalConstructor.prototype).forEach(
        (prototype) => {
          const method = this[prototype];
          if (
            prototype !== ValidPrototype.constructor &&
            typeof method === ValidPrototype.function
          ) {
            this[prototype] = method.bind(this);
          }
        }
      );
    }
  };
}
