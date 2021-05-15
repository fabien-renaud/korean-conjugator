import {POLITE_SUFFIX, FORMAL_POLITE_WITH_VOWEL_SUFFIX, FORMAL_POLITE_WITH_CONSONANT_SUFFIX, PAST_PREFIX} from './constants';

/*
 * Curried addSuffix
 */
export const addSuffix = (suffix) => (decomposedVerb) => ({
    ...decomposedVerb,
    conjugatedVerb: decomposedVerb.conjugatedVerb + suffix
});

export const addPoliteSuffix = addSuffix(POLITE_SUFFIX);
export const addFormalPoliteWithVowelSuffix = addSuffix(FORMAL_POLITE_WITH_VOWEL_SUFFIX);
export const addFormalPoliteWithConsonantSuffix = addSuffix(FORMAL_POLITE_WITH_CONSONANT_SUFFIX);

/*
 * Prefix are handled the same way than suffix, but we expects ending being added later
 */
const addPrefix = addSuffix;

export const addPastPrefix = addPrefix(PAST_PREFIX);
