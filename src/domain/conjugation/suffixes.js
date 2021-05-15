import {POLITE_SUFFIX, FORMAL_POLITE_WITH_VOWEL_SUFFIX, FORMAL_POLITE_WITH_CONSONANT_SUFFIX, PAST_PREFIX_FORMAL, PAST_PREFIX_INFORMAL} from './constants';
import {endsWithConsonant, findLastConsonant, findLastVowel} from './utils';

/*
 * Curried addSuffix
 */
export const addSuffix = (suffix) => (decomposedVerb) => {
    const conjugatedVerb = decomposedVerb.conjugatedVerb + suffix;
    return {
        ...decomposedVerb,
        conjugatedVerb,
        lastVowel: findLastVowel(conjugatedVerb),
        lastConsonant: findLastConsonant(conjugatedVerb),
        hasFinal: endsWithConsonant(conjugatedVerb)
    };
};

export const addPoliteSuffix = addSuffix(POLITE_SUFFIX);
export const addFormalPoliteWithVowelSuffix = addSuffix(FORMAL_POLITE_WITH_VOWEL_SUFFIX);
export const addFormalPoliteWithConsonantSuffix = addSuffix(FORMAL_POLITE_WITH_CONSONANT_SUFFIX);

/*
 * Prefix are handled the same way than suffix, but we expects ending being added later
 */
const addPrefix = addSuffix;

export const addPastFormalPrefix = addPrefix(PAST_PREFIX_FORMAL);
export const addPastInformalPrefix = addPrefix(PAST_PREFIX_INFORMAL);
