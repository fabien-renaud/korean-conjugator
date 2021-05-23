// Options values
import {isVerb, POLITENESS, TENSE} from '../../domain/conjugation';
import {getVerb} from './utils';

export const validateVerb = (argv) => {
    const verb = getVerb(argv);
    if (!verb) throw 'No verb provided';
    if (!isVerb(verb)) throw "Word provided isn't a verb";
    return true;
};

export const validateTense = (argv) => {
    if (!Object.values(TENSE).includes(argv.tense)) throw 'Tense not allowed';
    return true;
};

export const validatePoliteness = (argv) => {
    if (!Object.values(POLITENESS).includes(argv.politeness)) throw 'Politeness not allowed';
    return true;
};
