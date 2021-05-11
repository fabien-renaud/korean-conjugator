import hangul from 'hangul-js';

// prettier-ignore
const irregularRules = [
    {
        // 이다 - Unique verb
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -2), 'ㅇ', 'ㅔ'],
        lastJamoParams: {ending: 'ㅔ', hasFinal: false},
        list: ['이다'],
        flagStop: true // Stop the treatment here
    },
    {
        // 되다 - Unique verb
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㅐ'],
        lastJamoParams: {ending: 'ㅐ', hasFinal: false},
        list: ['되다'],
        flagStop: true // Stop the treatment here
    },
    {
        // Bieup 오 - Replace ㅂ with 오 when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㅇ', 'ㅗ'],
        lastJamoParams: {ending: 'ㅗ', hasFinal: false},
        list: ['돕다', '곱다']
    },
    {
        // Bieup 우 - Replace ㅂ with 우 when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㅇ', 'ㅜ'],
        lastJamoParams: {ending: 'ㅜ', hasFinal: false},
        list: [
            '가볍다', '고맙다', '눕다', '굽다', '귀엽다', '깁다', '까다롭다', '더럽다', '덥다', '두렵다',
            '맵다', '무겁다', '밉다', '반갑다', '부럽다', '아름답다', '어둡다', '어렵다', '쉽다', '줍다',
            '즐겁다', '춥다'
        ]
    },
    {
        // Digeut - Replace ㄷ with ㄹ when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㄹ'],
        lastJamoParams: {ending: undefined, vowelPosition: -2, hasFinal: true},
        list: ['듣다', '걷다', '깨닫다', '묻다', '싣다']
    },
    {
        // Shiot - Remove ㅅ when followed by a vowel
        transform: (disassembledVerb) => disassembledVerb.slice(0, -3),
        lastJamoParams: {ending: undefined, vowelPosition: -1, hasFinal: false},
        list: ['낫다', '짓다', '긋다', '잇다', '붓다', '젓다']
    },
    {
        // Hieut - Replace vowel + ㅎ with ㅐ when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -4), 'ㅐ'],
        lastJamoParams: {ending: 'ㅐ', hasFinal: false},
        list: ['노랗다', '빨갛다', '까맣다', '파갛다', '그렇다', '어떻다'],
        flagStop: true // Stop the treatment here
    },
    {
        // Hieut 야 - Replace vowel + ㅎ with ㅒ when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -4), 'ㅒ'],
        lastJamoParams: {ending: 'ㅒ', hasFinal: false},
        list: ['하얗다'],
        flagStop: true // Stop the treatment here
    },
    {
        // Rieul - Remove final ㄹ when followed by ㄴ, ㅂ or ㅅ
        transform: (disassembledVerb) => disassembledVerb.slice(0, -3),
        lastJamoParams: {ending: undefined, vowelPosition: -1, hasFinal: false},
        pattern: /[ㄴㅂㅅ]ㄷㅏ$/
    },
    {
        // Reu - Remove ㅡ and add ㄹ to the previous jamo
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㄹ'],
        lastJamoParams: {ending: undefined, vowelPosition: -3, hasFinal: false},
        pattern: /ㄹㄷㅏ$/
    },
    {
        // 따르다 - Special verb
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㅏ'],
        lastJamoParams: {ending: 'ㅡ', hasFinal: false},
        list: ['따르다'],
        flagStop: true // Stop the treatment here
    },
    {
        // Eu - Remove ㅡ - Don't apply to 2 syllables verbs like 쓰다
        transform: (disassembledVerb) => disassembledVerb.slice(0, -2),
        lastJamoParams: {ending: undefined, vowelPosition: -4, hasFinal: false},
        pattern: /.{3,}ㅡㄷㅏ$/
    }
];

const matchOrIncludes = (verb) => ({list, pattern}) => pattern?.test(hangul.disassemble(verb).join('')) || list?.includes(verb);
export const findIrregularRule = (verb) => irregularRules.filter(matchOrIncludes(verb))[0] ?? null;
