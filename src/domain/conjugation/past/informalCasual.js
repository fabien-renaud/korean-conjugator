import conjugateToPresentInformalCasual from '../present/informalCasual';
import {composeJamos} from '../utils';

const conjugateToPastInformalCasual = (verb) => {
    return composeJamos(conjugateToPresentInformalCasual(verb), 'ㅆ어');
};

export default conjugateToPastInformalCasual;
