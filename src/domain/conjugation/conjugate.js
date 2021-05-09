import hangul from 'hangul-js';
import {decomposeVerb, getVerbEndingFromLastJamo} from './utils';
import {HADA_VERB_ENDING, A_WITHOUT_FINAL_VERB_ENDING, I_WITHOUT_FINAL_VERB_ENDING} from './constants';
import verbEnding from './verbEnding.json';

export const conjugate = (verb, tense, politeness) => {
    const {verbStem, lastJamo} = decomposeVerb(verb);
    const disassembledVerbStem = hangul.disassemble(verbStem);
    const verbStemEnding = getVerbEndingFromLastJamo(lastJamo);

    if (politeness !== 'formalHigh' && [HADA_VERB_ENDING, A_WITHOUT_FINAL_VERB_ENDING, I_WITHOUT_FINAL_VERB_ENDING].includes(verbStemEnding)) {
        return hangul.assemble([...disassembledVerbStem.slice(0, -1), ...verbEnding[tense][politeness][verbStemEnding]]);
    }
    return hangul.assemble([...disassembledVerbStem, ...verbEnding[tense][politeness][verbStemEnding]]);
};
