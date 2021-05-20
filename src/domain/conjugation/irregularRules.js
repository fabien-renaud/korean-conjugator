import {
    baseEndingWithFinal,
    isIdaVerb,
    lastSyllableFinal,
    lastSyllableVowel,
    sliceOneJamoToLastSyllable,
    sliceTwoJamosToLastSyllable
} from './utils';
import {POLITENESS, TENSE} from './constants';

// prettier-ignore
export const irregularRules = [
    {
        /*
         * 이다 - Unique verb
         * Steps: Add 에(요)
         * Example: 이다 -> 이에(요)
         */
        transform: (syllables) => [...syllables, 'ㅇ', 'ㅔ'],
        test: ({verb, tense, politeness}) => isIdaVerb(verb) && tense === TENSE.PRESENT && politeness === POLITENESS.INFORMAL_POLITE
    },
    {
        /*
         * 이다 - Unique verb
         * Steps: Add 야(요)
         * Example: 이다 -> 이야
         */
        transform: (syllables) => [...syllables, 'ㅇ', 'ㅑ'],
        test: ({verb, tense, politeness}) => isIdaVerb(verb) && tense === TENSE.PRESENT && politeness === POLITENESS.INFORMAL_CASUAL
    },
    {
        /*
         * 되다 - Unique verb
         * Steps: Remove ㅣ and add ㅐ(요)
         * Example: 되다 -> 돼(요)
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables), 'ㅐ'],
        test: ({verb, tense, politeness}) => ['되다'].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Bieup 오
         * Steps: Remove ㅂ and add 오 +ㅏ(요) when followed by a vowel
         * Example: 돕다 -> 도오 -> 도와(요)
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables), 'ㅇ', 'ㅗ', 'ㅏ'],
        test: ({verb, tense, politeness}) => ['돕다', '곱다'].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Bieup 우
         * Steps: Remove ㅂ and add 우 + ㅓ(요) when followed by a vowel
         * Example: 가볍다 -> 가벼우 -> 가벼워(요)
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables), 'ㅇ', 'ㅜ', 'ㅓ'],
        test: ({verb, tense, politeness}) => [
            '가볍다', '고맙다', '눕다', '굽다', '귀엽다', '깁다', '까다롭다', '더럽다', '덥다', '두렵다',
            '맵다', '무겁다', '밉다', '반갑다', '부럽다', '아름답다', '어둡다', '어렵다', '쉽다', '줍다',
            '즐겁다', '춥다'
        ].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Digeut
         * Steps: Remove ㄷ and add ㄹ + 어/아(요) when followed by a vowel
         * Example: 듣다 -> 들 -> 들어(요)
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables), 'ㄹ', baseEndingWithFinal(lastSyllableVowel(syllables))],
        test: ({verb, tense, politeness}) => ['듣다', '걷다', '깨닫다', '묻다', '싣다'].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Shiot
         * Steps: Remove ㅅ and add 어/아(요) when followed by a vowel
         * Example: 낫다 -> 나 -> 나아(요)
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables), baseEndingWithFinal(lastSyllableVowel(syllables))],
        test: ({verb, tense, politeness}) => ['낫다', '짓다', '긋다', '잇다', '붓다', '젓다'].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Hieut
         * Steps: Remove vowel + ㅎ and add ㅐ when followed by a vowel
         * Example: 노랗다 -> 노래 -> 노래(요)
         */
        transform: (syllables) => [...sliceTwoJamosToLastSyllable(syllables), 'ㅐ'],
        test: ({verb, tense, politeness}) => ['노랗다', '빨갛다', '까맣다', '파갛다', '그렇다', '어떻다'].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Hieut 야
         * Steps: Remove vowel + ㅎ and add ㅒ when followed by a vowel
         * Example: 하얗다 -> 하얘 -> 하얘(요)
         */
        transform: (syllables) => [...sliceTwoJamosToLastSyllable(syllables), 'ㅒ'],
        test: ({verb, tense, politeness}) => ['하얗다'].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Rieul
         * Steps: Remove final ㄹ and add 어/아(요) when followed by ㄴ, ㅂ or ㅅ
         * Example:
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables)],
        test: ({politeness, syllables}) => politeness === POLITENESS.FORMAL_POLITE && lastSyllableFinal(syllables) === 'ㄹ'
    },
    {
        /*
         * 따르다 - Special verb
         * Steps: Remove ㅡ and add ㅏ
         * Example: 따르다 -> 따라 -> 따라(요)
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables), 'ㅏ'],
        test: ({verb, tense, politeness}) => ['따르다'].includes(verb) && !(tense === TENSE.PRESENT && politeness === POLITENESS.FORMAL_POLITE)
    },
    {
        /*
         * Reu
         * Steps: Remove ㅡ and add ㄹ to the previous jamo
         * Example:
         */
        transform: (syllables) => [...sliceOneJamoToLastSyllable(syllables), 'ㄹ'],
        test: () => false,
        pattern: /ㄹㅡㄷㅏ$/
    },
    {
        /*
         * Eu
         * Steps: Remove ㅡ
         * Example:
         * Exceptions: Don't apply to 2 syllables verbs like 쓰다
         */
        transform: (syllables) => sliceOneJamoToLastSyllable(syllables),
        test: () => false,
        pattern: /.{3,}ㅡㄷㅏ$/
    }
];
