import {addFormalPoliteWithConsonantSuffix, addFormalPoliteWithVowelSuffix, addPastPrefix} from './suffixes';
import {findIrregularRule, handleIrregular} from './handleIrregular';
import {handleRegularVerb} from './handleRegular';

/*
 * Stages allow to breakdown logic reusable process
 */
export const formalPoliteStage = (decomposedVerb) => {
    return decomposedVerb.hasFinal ? addFormalPoliteWithConsonantSuffix(decomposedVerb) : addFormalPoliteWithVowelSuffix(decomposedVerb);
};

const handleIrregularVerbStage = (decomposedVerb) => {
    const rule = findIrregularRule(decomposedVerb.verb);
    if (rule) return handleIrregular(decomposedVerb, rule);
    return decomposedVerb;
};

const handleRegularVerbStage = (decomposedVerb) => {
    if (decomposedVerb.skipRegularStage) return decomposedVerb;
    return handleRegularVerb(decomposedVerb);
};

/*
 * Stages arrays used to factorise stages in conjugation pipelines
 */
export const handleVerbStages = [handleIrregularVerbStage, handleRegularVerbStage];