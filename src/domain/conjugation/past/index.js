import conjugateToPastFormalPolite from './formalPolite';
import conjugateToPastInformalPolite from './informalPolite';
import conjugateToPastInformalCasual from './informalCasual';

const conjugateToPastPoliteness = {
    formalPolite: conjugateToPastFormalPolite,
    informalPolite: conjugateToPastInformalPolite,
    informalCasual: conjugateToPastInformalCasual
};

const conjugateToPast = (politeness) => conjugateToPastPoliteness[politeness];

export default conjugateToPast;
