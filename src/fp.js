export const arrayIncludes = (array) => (value) => array.includes(value);
export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
