const hangul = require('hangul-js');
const composeJamos = (...args) => hangul.assemble(hangul.disassemble(args));

const verb = '가볍다';

// prettier-ignore
const initials = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
    'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
    'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

// prettier-ignore
const medials = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
    'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
    'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
]
// prettier-ignore

const disassembledMedials = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
    'ㅖ', 'ㅗ', ['ㅗ', 'ㅏ'], ['ㅗ', 'ㅐ'], ['ㅗ', 'ㅣ'], 'ㅛ', 'ㅜ',
    ['ㅜ', 'ㅓ'], ['ㅜ', 'ㅔ'], ['ㅜ', 'ㅣ'], 'ㅠ', 'ㅡ', ['ㅡ', 'ㅣ'], 'ㅣ'
];

// prettier-ignore
const finals = [
    '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
    'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
    'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
    'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
]

// prettier-ignore
const disassembledFinals = [
    '', 'ㄱ', 'ㄲ', ['ㄱ', 'ㅅ'], 'ㄴ', ['ㄴ', 'ㅈ'], ['ㄴ', 'ㅎ'],
    'ㄷ', 'ㄹ', ['ㄹ', 'ㄱ'], ['ㄹ', 'ㅁ'], ['ㄹ', 'ㅂ'], ['ㄹ', 'ㅅ'], ['ㄹ', 'ㅌ'],
    ['ㄹ', 'ㅍ'], ['ㄹ', 'ㅎ'], 'ㅁ', 'ㅂ', ['ㅂ', 'ㅅ'], 'ㅅ', 'ㅆ',
    'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
]

const HANGUL_OFFSET = 44032;
const charToHex = (char) => `0x${char.charCodeAt(0).toString(16)}`;
const isHangulSyllable = (charCode) => 0xac00 <= charCode && charCode <= 0xd7a3;
const isHangulCompabilityJamo = (charCode) => 0x3130 <= charCode && charCode <= 0x318f;
const isHangulConsonant = (charCode) => 0x3130 <= charCode && charCode <= 0x314e;
const isHangulVowel = (charCode) => 0x314f <= charCode && charCode <= 0x3163;

const getJamosFromHangulSyllable = (jamo) => {
    const jamoCode = jamo.charCodeAt(0) - HANGUL_OFFSET;
    const finalCode = jamoCode % 28;
    const medialCode = ((jamoCode - finalCode) / 28) % 21;
    const initialCode = Math.floor(jamoCode / 588);
    // return [initials[initialCode], ...disassembledMedials[medialCode], ...disassembledFinals[finalCode]];
    return [initials[initialCode], disassembledMedials[medialCode], disassembledFinals[finalCode]].filter(Boolean).flat();
};

const decomposeJamos = (string) => {
    if (typeof string !== 'string') throw 'Not a string';
    return string.split('').reduce((jamos, character) => {
        const code = charToHex(character);
        console.log(isHangulCompabilityJamo(code));
        if (isHangulCompabilityJamo(code)) return [...jamos, character];
        if (isHangulSyllable(code)) return [...jamos, ...getJamosFromHangulSyllable(character)];
        return jamos;
    }, []);
};

// const composeJamos = (...jamos) => {};

// console.log('안녕하세요'.split(''));
// console.log('안녕하세요'.split('').map(h => {
//     const char = decomposeJamos(h);
//     return {
//         ...char.map(c => ({
//             char: c,
//             hex: charToHex(c),
//             consonant: isHangulConsonant(charToHex(c)),
//             vowel: isHangulVowel(charToHex(c))
//         }))
//     }
// }));
// console.log(null?.match("coucou") || ['coucou'].includes("coucou"));

const consonants = [
    'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㄺ',
    'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ',
    'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];
const vowels = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ',
    'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const getSyllablesExceptLast = (syllables) => syllables.slice(0, -1);
const getLastSyllable = (syllables) => syllables.slice(-1).flat();
const getSyllableVowel = (syllable) => syllable[1];
const getSyllableFinal = (syllable) => syllable.slice(2);
const hasFinal = (syllable) => getSyllableFinal(syllable).length > 0;
const findLastSyllableVowel = pipe(getLastSyllable, getSyllableVowel);
const findLastSyllableFinal = pipe(getLastSyllable, getSyllableFinal);
const lastSyllableEndsWithConsonant = pipe(getLastSyllable, hasFinal);
const fnToLastSyllable = (fn) => (syllables) => [...getSyllablesExceptLast(syllables), fn(getLastSyllable(syllables))];
const sliceLastSyllable = (x) => fnToLastSyllable((array) => array.slice(0, -x));
const sliceOneJamoToLastSyllable = sliceLastSyllable(1);
const sliceTwoJamosToLastSyllable = sliceLastSyllable(2);

const decomposeVerb = (parameters) => {
    // Remove 다
    const verbStem = parameters.verb.slice(0, -1);
    const splitVerbStem = verbStem.split('');
    return {
        ...parameters,
        syllables: splitVerbStem.map((jamo) => hangul.disassemble(jamo))
    }
};

const syllables = decomposeVerb({verb: "마시다"}).syllables;
console.log(sliceOneJamoToLastSyllable(syllables));
