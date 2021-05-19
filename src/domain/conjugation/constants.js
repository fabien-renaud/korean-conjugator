// prettier-ignore
export const CONSONANTS = [
    'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㄺ',
    'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ',
    'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

// prettier-ignore
export const VOWELS = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
    'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ',
    'ㅣ'
];

export const TENSE = {
    PAST: 'past',
    PRESENT: 'present'
}

export const POLITENESS = {
    FORMAL_POLITE: 'formalPolite',
    INFORMAL_POLITE: 'informalPolite',
    INFORMAL_CASUAL: 'informalCasual'
}

export const PAST_PREFIX_FORMAL = 'ㅆ';
export const PAST_PREFIX_INFORMAL = ['ㅆ', '어'];
export const POLITE_SUFFIX = '요';
export const FORMAL_POLITE_WITH_VOWEL_SUFFIX = ['ㅂ', '니다'];
export const FORMAL_POLITE_WITH_CONSONANT_SUFFIX = '습니다';
