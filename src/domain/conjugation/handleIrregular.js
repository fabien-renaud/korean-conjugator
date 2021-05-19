import hangul from 'hangul-js';
import {irregularRules} from './irregularRules';

// Either no "only" list or list includes tense/politeness
const tensePolitenessConstraint = (rule, tense, politeness) => !rule.only || rule.only.includes(`${tense}/${politeness}`);
// Verb matches rule's regex pattern
const matchPatternConstraint = (rule, verb) => rule.pattern?.test(hangul.disassemble(verb).join(''));
// Verb is included in rule's list
const includedInListConstraint = (rule, verb) => rule.list?.includes(verb);

const allConstraints = (verb, tense, politeness) => (rule) =>
    tensePolitenessConstraint(rule, tense, politeness) && (matchPatternConstraint(rule, verb) || includedInListConstraint(rule, verb));

export const findIrregularRule = (decomposedVerb) => {
    const {verb, tense, politeness} = decomposedVerb;
    return irregularRules.find(allConstraints(verb, tense, politeness))
};

export const handleIrregular = (decomposedVerb, rule) => {
    return {
        ...decomposedVerb,
        syllables: rule.transform(decomposedVerb.syllables),
        skipRegularStage: true
    };
};
