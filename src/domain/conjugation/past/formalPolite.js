import conjugateToPresentInformalCasual from '../present/informalCasual';
import {composeJamos} from '../utils';

const conjugateToPastFormalPolite = (verb) => {
    return composeJamos(conjugateToPresentInformalCasual(verb), 'ㅆ습니다');
};

export default conjugateToPastFormalPolite;
