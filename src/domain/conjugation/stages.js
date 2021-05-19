import {addFormalPoliteWithConsonantSuffix, addFormalPoliteWithVowelSuffix} from './suffixes';
import {findIrregularRule, handleIrregular} from './handleIrregular';
import {handleRegularVerb} from './handleRegular';

/*
 * Stages allow to breakdown logic reusable process
 */
export const formalPoliteStage = (decomposedVerb) => {
    return decomposedVerb.hasFinal ? addFormalPoliteWithConsonantSuffix(decomposedVerb) : addFormalPoliteWithVowelSuffix(decomposedVerb);
};

export const handleIrregularVerbStage = (decomposedVerb) => {
    // const rule = findIrregularRule(decomposedVerb);
    // if (rule) return handleIrregular(decomposedVerb, rule);
    return decomposedVerb;
};

export const handleRegularVerbStage = (decomposedVerb) => {
    if (decomposedVerb.skipRegularStage) return decomposedVerb;
    return handleRegularVerb(decomposedVerb);
};

/*
 * Stages arrays used to factorise stages in conjugation pipelines
 */
export const handleVerbStages = [handleIrregularVerbStage, handleRegularVerbStage];