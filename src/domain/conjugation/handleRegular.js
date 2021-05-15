import {composeJamos} from './utils';

const baseEndingHada = 'ㅐ';
const baseEndingWithFinal = (lastVowel) => {
    switch (lastVowel) {
        case 'ㅏ':
        case 'ㅗ':
            return '아';
        default:
            return '어';
    }
};
const baseEndingWithoutFinal = (lastVowel) => {
    switch (lastVowel) {
        case 'ㅏ':
            return 'ㅏ';
        case 'ㅗ':
            return 'ㅘ';
        case 'ㅜ':
            return 'ㅝ';
        case 'ㅣ':
            return 'ㅕ';
        case 'ㅡ':
            return 'ㅓ';
        case 'ㅓ':
            return 'ㅓ';
        default:
            return `${lastVowel}어`;
    }
};

export const handleRegularVerb = (decomposedVerb) => {
    const {conjugatedVerb, isHada, lastVowel, hasFinal} = decomposedVerb;
    if (isHada) {
        return {
            ...decomposedVerb,
            conjugatedVerb: `${conjugatedVerb.slice(0, -1)}${baseEndingHada}`
        };
    } else if (hasFinal) {
        return {
            ...decomposedVerb,
            conjugatedVerb: `${conjugatedVerb}${baseEndingWithFinal(lastVowel)}`,
            hasFinal: false
        };
    } else {
        return {
            ...decomposedVerb,
            conjugatedVerb: `${conjugatedVerb.slice(0, -1)}${baseEndingWithoutFinal(lastVowel)}`
        };
    }
};
