// prettier-ignore
const irregularRules = [
    {
        // Bieup 오 - Replace ㅂ with 오 when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㅇ', 'ㅗ'],
        lastJamo: {ending: 'ㅗ', hasFinal: false},
        list: ['돕다', '곱다']
    },
    {
        // Bieup 우 - Replace ㅂ with 우 when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㅇ', 'ㅜ'],
        lastJamo: {ending: 'ㅜ', hasFinal: false},
        list: [
            '가볍다', '고맙다', '눕다', '굽다', '귀엽다', '깁다', '까다롭다', '더럽다', '덥다', '두렵다',
            '맵다', '무겁다', '밉다', '반갑다', '부럽다', '아름답다', '어둡다', '어렵다', '쉽다', '줍다',
            '즐겁다', '춥다'
        ]
    },
    {
        // Digeut - Replace ㄷ with ㄹ when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -3), 'ㄹ'],
        lastJamo: {ending: undefined, hasFinal: true},
        list: ['듣다', '걷다', '깨닫다', '묻다', '싣다']
    },
    {
        // Shiot - Remove ㅅ when followed by a vowel
        transform: (disassembledVerb) => disassembledVerb.slice(0, -3),
        lastJamo: {ending: undefined, hasFinal: false},
        list: ['낫다', '짓다', '긋다', '잇다', '붓다', '젓다']
    },
    {
        // Hieut - Replace vowel + ㅎ with ㅐ when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -4), 'ㅐ'],
        lastJamo: {ending: 'ㅐ', hasFinal: false},
        list: ['노랗다', '빨갛다', '까맣다', '파갛다', '그렇다', '어떻다'],
        flagStop: true // Stop the treatment here
    },
    {
        // Hieut 야 - Replace vowel + ㅎ with ㅒ when followed by a vowel
        transform: (disassembledVerb) => [...disassembledVerb.slice(0, -4), 'ㅒ'],
        lastJamo: {ending: 'ㅒ', hasFinal: false},
        list: ['하얗다'],
        flagStop: true // Stop the treatment here
    },
    // {
    //     // Rieul - Remove final ㄹ when followed by ㄴ, ㅂ or ㅅ
    //     transform: (disassembledVerb) => disassembledVerb.slice(0, -3),
    //     lastJamo: {ending: undefined, hasFinal: false},
    //     list: []
    // }
];

export const findIrregularRule = (verb) => irregularRules.filter((rule) => rule.list.includes(verb))[0] ?? null;
