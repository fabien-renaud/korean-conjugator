import {isVerb} from './utils';


describe('isVerb', () => {
    test('recognize 하다 as a verb', () => {
        expect(isVerb('하다')).toBe(true);
    });

    test('does not recognize 안녕 as a verb', () => {
        expect(isVerb('안녕')).toBe(false);
    });

    test('does not recognize 다현 as a verb', () => {
        expect(isVerb('다현')).toBe(false);
    });

    test('does not recognize 담 as a verb', () => {
        expect(isVerb('담')).toBe(false);
    });
});
