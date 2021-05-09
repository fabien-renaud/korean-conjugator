import {composeJamos, decomposeVerb} from '../utils';

const conjugateToPresentFormalPolite = (verb) => {
    const {verbStem, lastJamo} = decomposeVerb(verb);
    return composeJamos(...verbStem, lastJamo.hasFinal ? '스' : null, 'ㅂ니다');
};

export default conjugateToPresentFormalPolite;
