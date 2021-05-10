// prettier-ignore
const irregularRules = [
    {
        // Bieup 오 - Replace ㅂ with 오
        transform: (stringVerb) => [...stringVerb.slice(0, -3), 'ㅇ', 'ㅗ'],
        lastJamo: {ending: 'ㅗ', hasFinal: false},
        list: ['돕다', '곱다']
    },
    {
        // Bieup 우 - Replace ㅂ with 우
        transform: (stringVerb) => [...stringVerb.slice(0, -3), 'ㅇ', 'ㅜ'],
        lastJamo: {ending: 'ㅜ', hasFinal: false},
        list: [
            '가볍다', '고맙다', '눕다', '굽다', '귀엽다', '깁다', '까다롭다', '더럽다', '덥다', '두렵다',
            '맵다', '무겁다', '밉다', '반갑다', '부럽다', '아름답다', '어둡다', '어렵다', '쉽다', '줍다',
            '즐겁다', '춥다'
        ]
    }
];

export const findIrregularRule = (verb) => irregularRules.filter((rule) => rule.list.includes(verb))[0] ?? null;
