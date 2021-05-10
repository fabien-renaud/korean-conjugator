import conjugateToPast from './past';
import conjugateToPresent from './present';

const conjugateToTense = {
    past: conjugateToPast,
    present: conjugateToPresent
};

export const conjugateTo = (tense, politeness, verb) => conjugateToTense[tense](politeness)(verb);
