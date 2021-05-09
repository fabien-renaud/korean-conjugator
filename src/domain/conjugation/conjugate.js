import {conjugateToPastFormalPolite, conjugateToPastInformalPolite, conjugateToPastInformalCasual} from './past';
import {conjugateToPresentFormalPolite, conjugateToPresentInformalCasual, conjugateToPresentInformalPolite} from './present';

export const conjugate = {
    'past/formalPolite': conjugateToPastFormalPolite,
    'past/informalPolite': conjugateToPastInformalPolite,
    'past/informalCasual': conjugateToPastInformalCasual,
    'present/formalPolite': conjugateToPresentFormalPolite,
    'present/informalPolite': conjugateToPresentInformalPolite,
    'present/informalCasual': conjugateToPresentInformalCasual
};
