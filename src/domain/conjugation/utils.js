import hangul from 'hangul-js';

export const isVerb = (verb) => /다$/.test(verb);

export const decomposeVerb = (verb) => {
    const {verbStem, lastJamo} = /(?<verbStem>.*(?<lastJamo>.))다$/.exec(verb)?.groups ?? {};
    const disassembledVerbStem = hangul.disassemble(verbStem);
    const disassembledLastJamo = hangul.disassemble(lastJamo);
    return {
        verbStem: disassembledVerbStem,
        lastJamo: {
            ending: lastJamo === '하' ? '하' : disassembledLastJamo[1],
            hasFinal: disassembledLastJamo[2] !== undefined
        }
    };
};

export const composeJamos = (...args) => hangul.assemble(hangul.disassemble(args));
