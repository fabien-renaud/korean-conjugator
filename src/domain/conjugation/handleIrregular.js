import {irregularRules} from './irregularRules';

export const findIrregularRule = (decomposedVerb) => irregularRules.find((rule) => rule.test(decomposedVerb));

export const handleIrregular = (decomposedVerb, rule) => ({
    ...decomposedVerb,
    syllables: rule.transform(decomposedVerb.syllables),
    skipRegularStage: true
});
