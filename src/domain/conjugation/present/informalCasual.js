import {findIrregularRule} from './irregularRules';
import {composeJamos, decomposeIrregularVerb, decomposeVerb} from '../utils';

const withFinalEnding = (lastJamoEnding) => {
    switch (lastJamoEnding) {
        case 'ㅏ':
        case 'ㅗ':
            return '아';
        default:
            return '어';
    }
};

const withoutFinalEnding = (lastJamoEnding) => {
    switch (lastJamoEnding) {
        case '하':
            return 'ㅐ';
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
            return `${lastJamoEnding}어`;
    }
};

const conjugateToPresentInformalCasual = (verb) => {
    const irregularRule = findIrregularRule(verb);
    const {verbStem, lastJamo} = irregularRule ? decomposeIrregularVerb(verb, irregularRule) : decomposeVerb(verb);
    if (lastJamo.hasFinal) return composeJamos(...verbStem, withFinalEnding(lastJamo.ending));
    return composeJamos(...verbStem.slice(0, -1), withoutFinalEnding(lastJamo.ending));
};

export default conjugateToPresentInformalCasual;
