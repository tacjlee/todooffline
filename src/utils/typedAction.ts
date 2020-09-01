export function typedAction<T extends string>(type: T): { type: T }; // Overload 1 with default  Type
export function typedAction<T extends string, P extends any>(type: T, payload: P): { type: T; payload: P }; // Overload 2 with default Type

// Overload in Typescript, you only have one implementation with multiple signatures
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}
