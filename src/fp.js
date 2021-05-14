export const arrayIncludes = (array) => (value) => array.includes(value);

export const findLast = (condition) => (array) => {
    let index = array.length;

    while (--index >= 0) {
        if (condition(array[index])) return array[index];
    }

    return undefined;
};

export const last = (input) => input.slice(-1);
export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
