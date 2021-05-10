import {isVerb, decomposeIrregularVerb, decomposeVerb, composeJamos} from './utils';

describe('isVerb', () => {
    const dataset = ['하다', '먹다', '마시다'];
    dataset.map((verb) => {
        test(`${verb} is a verb`, () => {
            expect(isVerb(verb)).toBe(true);
        });
    });

    const wrongDataset = ['안녕하세요', '다현', '담', 'coucou', '', undefined];
    wrongDataset.map((verb) => {
        test(`${verb} is not a verb`, () => {
            expect(isVerb(verb)).toBe(false);
        });
    });
});

describe('decomposeIrregular', () => {
    const rule = {
        // Bieup 오 - Replace ㅂ with 오
        transform: (stringVerb) => [...stringVerb.slice(0, -3), 'ㅇ', 'ㅗ'],
        lastJamo: {ending: 'ㅗ', hasFinal: false},
        list: ['돕다', '곱다']
    };
    const dataset = [
        {verb: '돕다', expects: {verbStem: ['ㄷ', 'ㅗ', 'ㅇ', 'ㅗ'], lastJamo: {ending: 'ㅗ', hasFinal: false}}},
        {verb: '곱다', expects: {verbStem: ['ㄱ', 'ㅗ', 'ㅇ', 'ㅗ'], lastJamo: {ending: 'ㅗ', hasFinal: false}}}
    ];
    dataset.map(({verb, expects}) => {
        test(`${verb} equals ${expects}`, () => {
            expect(decomposeIrregularVerb(verb, rule)).toEqual(expects);
        });
    });
});

describe('decomposeVerb', () => {
    const dataset = [
        {verb: '하다', expects: {verbStem: ['ㅎ', 'ㅏ'], lastJamo: {ending: '하', hasFinal: false}}},
        {verb: '보다', expects: {verbStem: ['ㅂ', 'ㅗ'], lastJamo: {ending: 'ㅗ', hasFinal: false}}},
        {verb: '먹다', expects: {verbStem: ['ㅁ', 'ㅓ', 'ㄱ'], lastJamo: {ending: 'ㅓ', hasFinal: true}}}
    ];
    dataset.map(({verb, expects}) => {
        test(`${verb} equals ${expects}`, () => {
            expect(decomposeVerb(verb)).toEqual(expects);
        });
    });
});

describe('composeJamos', () => {
    const dataset = [
        {jamosArray: ['ㅁ', 'ㅓ', 'ㄱ', 'ㅅ', 'ㅡ', 'ㅂ', '니다'], expects: '먹습니다'},
        {jamosArray: ['ㅂ', 'ㅗ', 'ㅏ', '요'], expects: '봐요'},
        {jamosArray: ['보', 'ㅏ', '요'], expects: '봐요'}
    ];
    dataset.map(({jamosArray, expects}) => {
        test(`${jamosArray} returns ${expects}`, () => {
            expect(composeJamos(...jamosArray)).toBe(expects);
        });
    });
});
