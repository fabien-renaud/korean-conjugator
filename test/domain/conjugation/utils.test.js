import {isVerb, decomposeVerb} from '../../../src/domain/conjugation/utils';

describe('isVerb', () => {
    const dataset = ['하다', '먹다', '마시다'];
    dataset.map((verb) => {
        test(`${verb} is a verb`, () => {
            expect(isVerb(verb)).toBe(true);
        });
    });

    const wrongDataset = ['안녕하세요', '다현', '담', '다', 'coucou', '', undefined];
    wrongDataset.map((verb) => {
        test(`${verb} is not a verb`, () => {
            expect(isVerb(verb)).toBe(false);
        });
    });
});

// describe('decomposeVerb', () => {
//     test(`다 cannot be decomposed`, () => {
//         expect(() => decomposeVerb({verb: '다'})).toThrowError('Verb cannot be decomposed');
//     });
// });
