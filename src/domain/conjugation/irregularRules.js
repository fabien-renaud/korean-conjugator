// prettier-ignore
export const irregularRules = [
    {
        /*
         * 이다 - Unique verb
         * Steps: Add 에(요)
         * Example: 이다 -> 이에(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb}ㅇㅔ`,
        skipRegularStage: true,
        list: ['이다']
    },
    {
        /*
         * 되다 - Unique verb
         * Steps: Remove ㅣ and add ㅐ(요)
         * Example: 되다 -> 돼(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -1)}ㅐ`,
        skipRegularStage: true,
        list: ['되다']
    },
    {
        /*
         * Bieup 오
         * Steps: Remove ㅂ and add 오 +ㅏ(요) when followed by a vowel
         * Example: 돕다 -> 도오 -> 도와(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -1)}ㅇㅗ`,
        list: ['돕다', '곱다']
    },
    {
        /*
         * Bieup 우
         * Steps: Remove ㅂ and add 우 + ㅓ(요) when followed by a vowel
         * Example: 가볍다 -> 가벼우 -> 가벼워(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -1)}ㅇㅜ`,
        list: [
            '가볍다', '고맙다', '눕다', '굽다', '귀엽다', '깁다', '까다롭다', '더럽다', '덥다', '두렵다',
            '맵다', '무겁다', '밉다', '반갑다', '부럽다', '아름답다', '어둡다', '어렵다', '쉽다', '줍다',
            '즐겁다', '춥다'
        ]
    },
    {
        /*
         * Digeut
         * Steps: Remove ㄷ and add ㄹ + 어/아(요) when followed by a vowel
         * Example: 듣다 -> 들 -> 들어(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -1)}ㄹ`,
        list: ['듣다', '걷다', '깨닫다', '묻다', '싣다']
    },
    {
        /*
         * Shiot
         * Steps: Remove ㅅ and add 어/아(요) when followed by a vowel
         * Example: 낫다 -> 나 -> 나아(요)
         */
        transform: (conjugatedVerb) => conjugatedVerb.slice(0, -1),
        list: ['낫다', '짓다', '긋다', '잇다', '붓다', '젓다']
    },
    {
        /*
         * Hieut
         * Steps: Remove vowel + ㅎ and add ㅐ when followed by a vowel
         * Example: 노랗다 -> 노래 -> 노래(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -2)}ㅐ`,
        skipRegularStage: true,
        list: ['노랗다', '빨갛다', '까맣다', '파갛다', '그렇다', '어떻다']
    },
    {
        /*
         * Hieut 야
         * Steps: Remove vowel + ㅎ and add ㅒ when followed by a vowel
         * Example: 하얗다 -> 하얘 -> 하얘(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -2)}ㅒ`,
        skipRegularStage: true,
        list: ['하얗다']
    },
    {
        /*
         * Rieul
         * Steps: Remove final ㄹ and add 어/아(요) when followed by ㄴ, ㅂ or ㅅ
         * Example:
         */
        transform: (conjugatedVerb) => conjugatedVerb.slice(0, -1),
        pattern: /[ㄴㅂㅅ]ㄷㅏ$/
    },
    {
        /*
         * Reu
         * Steps: Remove ㅡ and add ㄹ to the previous jamo
         * Example:
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -1)}ㄹ`,
        pattern: /ㄹㄷㅏ$/
    },
    {
        /*
         * 따르다 - Special verb
         * Steps: Remove ㅡ and add ㅏ
         * Example: 따르다 -> 따라 -> 따라(요)
         */
        transform: (conjugatedVerb) => `${conjugatedVerb.slice(0, -1)}ㅏ`,
        skipRegularStage: true,
        list: ['따르다']
    },
    {
        /*
         * Eu
         * Steps: Remove ㅡ
         * Example:
         * Exceptions: Don't apply to 2 syllables verbs like 쓰다
         */
        transform: (conjugatedVerb) => conjugatedVerb.slice(0, -1),
        pattern: /.{3,}ㅡㄷㅏ$/
    }
];
