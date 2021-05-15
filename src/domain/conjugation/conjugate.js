import {
    mainConjugationPipeline,
    pastFormalPoliteConjugationPipeline,
    pastInformalCasualConjugationPipeline,
    pastInformalPoliteConjugationPipeline,
    presentFormalPoliteConjugationPipeline,
    presentInformalCasualConjugationPipeline,
    presentInformalPoliteConjugationPipeline
} from './pipelines';

const conjugationPipelinesMap = {
    'past/formalPolite': pastFormalPoliteConjugationPipeline,
    'past/informalPolite': pastInformalPoliteConjugationPipeline,
    'past/informalCasual': pastInformalCasualConjugationPipeline,
    'present/formalPolite': presentFormalPoliteConjugationPipeline,
    'present/informalPolite': presentInformalPoliteConjugationPipeline,
    'present/informalCasual': presentInformalCasualConjugationPipeline
};

export const conjugate = (tense, politeness, verb) => mainConjugationPipeline(conjugationPipelinesMap[`${tense}/${politeness}`])(verb);
