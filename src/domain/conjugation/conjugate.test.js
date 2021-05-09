import {conjugate} from './conjugate';

describe('conjugate', () => {
    describe('to present tense', () => {
        describe('in informalHigh', () => {
            test('correctly conjugate 하다 verbs', () => {
                expect(conjugate('하다', 'present', 'informalHigh')).toBe('해요');
            });

            test('correctly conjugate ㅏ + final verbs', () => {
                expect(conjugate('닫다', 'present', 'informalHigh')).toBe('닫아요');
            });

            test('correctly conjugate ㅗ + final verbs', () => {
                expect(conjugate('솝다', 'present', 'informalHigh')).toBe('솝아요');
            });

            test('correctly conjugate ㅏ verbs', () => {
                expect(conjugate('가다', 'present', 'informalHigh')).toBe('가요');
            });

            test('correctly conjugate ㅗ verbs', () => {
                expect(conjugate('보다', 'present', 'informalHigh')).toBe('봐요');
            });

            test('correctly conjugate default + final verbs', () => {
                expect(conjugate('먹다', 'present', 'informalHigh')).toBe('먹어요');
            });

            test('correctly conjugate default verbs', () => {
                expect(conjugate('먹다', 'present', 'informalHigh')).toBe('먹어요');
            });

            test('correctly conjugate 시 verbs', () => {
                expect(conjugate('마시다', 'present', 'informalHigh')).toBe('마셔요');
            });
        });
    });
});
