import conjugateToPresentFormalPolite from './formalPolite';
import conjugateToPresentInformalPolite from './informalPolite';
import conjugateToPresentInformalCasual from './informalCasual';

const conjugateToPresentPoliteness = {
    formalPolite: conjugateToPresentFormalPolite,
    informalPolite: conjugateToPresentInformalPolite,
    informalCasual: conjugateToPresentInformalCasual
};

const conjugateToPresent = (politeness) => conjugateToPresentPoliteness[politeness];

export default conjugateToPresent;
