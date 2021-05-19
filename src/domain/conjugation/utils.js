import hangulJs from 'hangul-js';
import {arrayIncludes, pipe} from '../../fp';
import {CONSONANTS, VOWELS} from './constants';

export const isVerb = (hangul) => /.+(?:다)$/.test(hangul);
export const isHadaVerb = (hangul) => /(?:하다)$/.test(hangul);
export const isConsonant = arrayIncludes(CONSONANTS);
export const isVowel = arrayIncludes(VOWELS);


export const allSyllablesExceptLast = (syllables) => syllables.slice(0, -1);
export const lastSyllable = (syllables) => syllables.slice(-1)[0];
const syllableVowel = (syllable) => syllable[1];
const syllableFinal = (syllable) => syllable.slice(2);
const syllableHasFinal = (syllable) => syllableFinal(syllable).length > 0;
export const lastSyllableVowel = pipe(lastSyllable, syllableVowel);
export const lastSyllableFinal = pipe(lastSyllable, syllableFinal);
export const lastSyllableHasFinal = pipe(lastSyllable, syllableHasFinal);

// Apply function to last syllable
export const fnToLastSyllable = (fn) => (syllables) => [...allSyllablesExceptLast(syllables), fn(lastSyllable(syllables))];

// Slice x to last syllable
export const sliceLastSyllable = (x) => fnToLastSyllable((array) => array.slice(0, -x));
export const sliceOneJamoToLastSyllable = sliceLastSyllable(1);
export const sliceTwoJamosToLastSyllable = sliceLastSyllable(2);

export const baseEndingHada = 'ㅐ';

export const baseEndingWithFinal = (lastVowel) => {
    switch (lastVowel) {
        case 'ㅏ':
        case 'ㅗ':
            return '아';
        default:
            return '어';
    }
};

export const baseEndingWithoutFinal = (lastVowel) => {
    switch (lastVowel) {
        case 'ㅏ':
            return 'ㅏ';
        case 'ㅗ':
            return 'ㅘ';
        case 'ㅜ':
            return 'ㅝ';
        case 'ㅣ':
            return 'ㅕ';
        case 'ㅡ':
            return 'ㅓ';
        case 'ㅓ':
            return 'ㅓ';
        case 'ㅐ':
            return 'ㅐ';
        case 'ㅒ':
            return 'ㅒ';
        case 'ㅔ':
            return 'ㅔ';
        case 'ㅖ':
            return 'ㅖ';
        default:
            return `${lastVowel}어`;
    }
};

export const decomposeVerb = (parameters) => {
    // Remove 다
    const verbStem = parameters.verb.slice(0, -1);
    const splitVerbStem = verbStem.split('');
    return {
        ...parameters,
        syllables: splitVerbStem.map((jamo) => hangulJs.disassemble(jamo))
    }
};

export const composeVerb = (decomposedVerb) => hangulJs.assemble(decomposedVerb.syllables.flat());
