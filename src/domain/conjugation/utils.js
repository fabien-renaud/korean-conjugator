import hangul from 'hangul-js';
import {
    HADA_VERB_ENDING,
    AO_WITH_FINAL_VERB_ENDING,
    A_WITHOUT_FINAL_VERB_ENDING,
    O_WITHOUT_FINAL_VERB_ENDING,
    DEFAULT_WITH_FINAL_VERB_ENDING,
    DEFAULT_WITHOUT_FINAL_VERB_ENDING
} from './constants';

export const isVerb = (verb) => verb.match(/다$/);
export const jamoHasFinal = (jamo) => !!hangul.disassemble(jamo)[2];

export const getVerbEndingFromLastJamo = (lastJamo) => {
    if (lastJamo === '하') return HADA_VERB_ENDING;

    const lastVerbStem = hangul.disassemble(lastJamo);
    const hasFinal = jamoHasFinal(lastVerbStem);

    switch (lastVerbStem[1]) {
        case 'ㅏ':
            return hasFinal ? AO_WITH_FINAL_VERB_ENDING : A_WITHOUT_FINAL_VERB_ENDING;
        case 'ㅗ':
            return hasFinal ? AO_WITH_FINAL_VERB_ENDING : O_WITHOUT_FINAL_VERB_ENDING;
        default:
            return hasFinal ? DEFAULT_WITH_FINAL_VERB_ENDING : DEFAULT_WITHOUT_FINAL_VERB_ENDING;
    }
};
