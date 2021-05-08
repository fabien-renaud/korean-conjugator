import hangul from 'hangul-js';
import {getVerbEndingFromLastJamo} from './utils';
import {HADA_VERB_ENDING, A_WITHOUT_FINAL_VERB_ENDING} from './constants';
import verbEnding from './verbEnding.json';

export const conjugate = (verb, tense, politeness) => {
    const {verbStem, lastJamo} = /(?<verbStem>.*(?<lastJamo>.))다$/.exec(verb)?.groups;
    const disassembledVerbStem = hangul.disassemble(verbStem);
    const verbStemEnding = getVerbEndingFromLastJamo(lastJamo);

    if ([HADA_VERB_ENDING, A_WITHOUT_FINAL_VERB_ENDING].includes(verbStemEnding)) {
        return hangul.assemble([...disassembledVerbStem.slice(0, -1), ...verbEnding[tense][politeness][verbStemEnding]]);
    }
    return hangul.assemble([...disassembledVerbStem, ...verbEnding[tense][politeness][verbStemEnding]]);
};
