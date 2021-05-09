import {composeJamos, decomposeVerb} from '../utils';

const verbEnding = (lastJamoEnding) => {
    switch (lastJamoEnding) {
        case '하':
            return 'ㅐ';
        case 'ㅏ':
            return 'ㅏ';
        case 'ㅗ':
            return 'ㅘ';
        case 'ㅣ':
            return 'ㅕ';
        default:
            return 'ㅓ';
    }
};

const replaceCases = ['하', 'ㅏ', 'ㅗ', 'ㅓ', 'ㅣ', 'ㅡ'];

const conjugateToPresentInformalCasual = (verb) => {
    const {verbStem, lastJamo} = decomposeVerb(verb);
    if (!lastJamo.hasFinal && replaceCases.includes(lastJamo.ending)) {
        return composeJamos(...verbStem.slice(0, -1), verbEnding(lastJamo.ending));
    }
    return composeJamos(...verbStem, 'ㅇ', verbEnding(lastJamo.ending));
};

export default conjugateToPresentInformalCasual;
