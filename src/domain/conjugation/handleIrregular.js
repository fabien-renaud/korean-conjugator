import hangul from 'hangul-js';
import {irregularRules} from './irregularRules';
import {endsWithConsonant, findLastConsonant, findLastVowel} from './utils';

const matchOrIncludes = (verb) => ({list, pattern}) => pattern?.test(hangul.disassemble(verb).join('')) || list?.includes(verb);
export const findIrregularRule = (verb) => irregularRules.filter(matchOrIncludes(verb))[0] ?? null;

export const handleIrregular = (decomposedVerb, rule) => {
    const conjugatedVerb = rule.transform(decomposedVerb.conjugatedVerb);
    return {
        ...decomposedVerb,
        conjugatedVerb,
        lastVowel: findLastVowel(conjugatedVerb),
        lastConsonant: findLastConsonant(conjugatedVerb),
        hasFinal: endsWithConsonant(conjugatedVerb),
        skipRegularStage: rule.skipRegularStage ?? false
    };
};
