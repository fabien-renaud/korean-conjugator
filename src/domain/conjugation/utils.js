import hangul from 'hangul-js';
import {
    HADA_VERB_ENDING,
    AO_WITH_FINAL_VERB_ENDING,
    A_WITHOUT_FINAL_VERB_ENDING,
    O_WITHOUT_FINAL_VERB_ENDING,
    I_WITHOUT_FINAL_VERB_ENDING,
    DEFAULT_WITH_FINAL_VERB_ENDING,
    DEFAULT_WITHOUT_FINAL_VERB_ENDING
} from './constants';

export const isVerb = (verb) => /다$/.test(verb);

export const decomposeVerb = (verb) => /(?<verbStem>.*(?<lastJamo>.))다$/.exec(verb)?.groups ?? {};

export const jamoHasFinal = (jamo) => hangul.disassemble(jamo)[2] !== undefined;

export const getVerbEndingFromLastJamo = (lastJamo) => {
    if (lastJamo === '하') return HADA_VERB_ENDING;

    const lastVerbStem = hangul.disassemble(lastJamo);
    const hasFinal = jamoHasFinal(lastVerbStem);

    switch (lastVerbStem[1]) {
        case 'ㅏ':
            return hasFinal ? AO_WITH_FINAL_VERB_ENDING : A_WITHOUT_FINAL_VERB_ENDING;
        case 'ㅗ':
            return hasFinal ? AO_WITH_FINAL_VERB_ENDING : O_WITHOUT_FINAL_VERB_ENDING;
        case 'ㅣ':
            if (!hasFinal) return I_WITHOUT_FINAL_VERB_ENDING;
        default:
            return hasFinal ? DEFAULT_WITH_FINAL_VERB_ENDING : DEFAULT_WITHOUT_FINAL_VERB_ENDING;
    }
};
