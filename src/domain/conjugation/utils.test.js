import {isVerb, jamoHasFinal, getVerbEndingFromLastJamo, decomposeVerb} from './utils';
import {
    HADA_VERB_ENDING,
    AO_WITH_FINAL_VERB_ENDING,
    A_WITHOUT_FINAL_VERB_ENDING,
    O_WITHOUT_FINAL_VERB_ENDING,
    DEFAULT_WITH_FINAL_VERB_ENDING,
    DEFAULT_WITHOUT_FINAL_VERB_ENDING, I_WITHOUT_FINAL_VERB_ENDING
} from './constants';

describe('isVerb', () => {
    test('recognize 하다 as a verb', () => {
        expect(isVerb('하다')).toBe(true);
    });

    test('does not recognize 안녕 as a verb', () => {
        expect(isVerb('안녕')).toBe(false);
    });

    test('does not recognize 다음 as a verb', () => {
        expect(isVerb('다음')).toBe(false);
    });

    test('does not recognize 담 as a verb', () => {
        expect(isVerb('담')).toBe(false);
    });
});

describe('jamoHasFinal', () => {
    test('return true with 물', () => {
        expect(jamoHasFinal('물')).toBe(true);
    });

    test('return false with 보', () => {
        expect(jamoHasFinal('보')).toBe(false);
    });
});

describe('getVerbEndingFromLastJamo', () => {
    test(`return ${HADA_VERB_ENDING} with 하`, () => {
        expect(getVerbEndingFromLastJamo('하')).toBe(HADA_VERB_ENDING);
    });

    test(`return ${AO_WITH_FINAL_VERB_ENDING} with 닫`, () => {
        expect(getVerbEndingFromLastJamo('닫')).toBe(AO_WITH_FINAL_VERB_ENDING);
    });

    test(`return ${AO_WITH_FINAL_VERB_ENDING} with 온`, () => {
        expect(getVerbEndingFromLastJamo('온')).toBe(AO_WITH_FINAL_VERB_ENDING);
    });

    test(`return ${A_WITHOUT_FINAL_VERB_ENDING} with 가`, () => {
        expect(getVerbEndingFromLastJamo('가')).toBe(A_WITHOUT_FINAL_VERB_ENDING);
    });

    test(`return ${O_WITHOUT_FINAL_VERB_ENDING} with 보`, () => {
        expect(getVerbEndingFromLastJamo('보')).toBe(O_WITHOUT_FINAL_VERB_ENDING);
    });

    test(`return ${I_WITHOUT_FINAL_VERB_ENDING} with 시`, () => {
        expect(getVerbEndingFromLastJamo('시')).toBe(I_WITHOUT_FINAL_VERB_ENDING);
    });

    test(`return ${DEFAULT_WITH_FINAL_VERB_ENDING} with 먹`, () => {
        expect(getVerbEndingFromLastJamo('먹')).toBe(DEFAULT_WITH_FINAL_VERB_ENDING);
    });
});