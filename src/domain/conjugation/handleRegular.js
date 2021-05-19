import {
    baseEndingHada,
    baseEndingWithFinal,
    baseEndingWithoutFinal,
    isHadaVerb,
    lastSyllableHasFinal,
    lastSyllableVowel,
    sliceOneJamoToLastSyllable
} from './utils';

export const handleRegularVerb = (decomposedVerb) => {
    const {verb, syllables} = decomposedVerb;
    if (isHadaVerb(verb)) {
        return {
            ...decomposedVerb,
            syllables: [...sliceOneJamoToLastSyllable(syllables), baseEndingHada]
        };
    } else if (lastSyllableHasFinal(syllables)) {
        return {
            ...decomposedVerb,
            syllables: [...syllables, baseEndingWithFinal(lastSyllableVowel(syllables))]
        };
    } else {
        return {
            ...decomposedVerb,
            syllables: [...sliceOneJamoToLastSyllable(syllables), baseEndingWithoutFinal(lastSyllableVowel(syllables))]
        };
    }
};
