import {pipe} from '../../fp';
import {composeVerb, decomposeVerb} from './utils';
import {formalPoliteStage, handleVerbStages, pastStages} from './stages';
import {addPastPrefix, addPoliteSuffix} from './suffixes';

/*
 * Inside the main pipeline, the verb is decomposed in a special format that facilitate its treatment.
 * At the end of the pipeline, the verb is recomposed before being returned.
 */
export const mainConjugationPipeline = (conjugationPipeline) => pipe(decomposeVerb, conjugationPipeline, composeVerb);

/*
 * Each combination tense/politeness is handled by a specific pipeline.
 * pipe functions could be factored with mainConjugationPipeline, but we keep it for readability
 */
export const pastFormalPoliteConjugationPipeline = pipe(...pastStages, formalPoliteStage);
export const pastInformalPoliteConjugationPipeline = pipe(...pastStages, addPoliteSuffix);
export const pastInformalCasualConjugationPipeline = pipe(...pastStages);
export const presentFormalPoliteConjugationPipeline = pipe(formalPoliteStage);
export const presentInformalPoliteConjugationPipeline = pipe(...handleVerbStages, addPoliteSuffix);
export const presentInformalCasualConjugationPipeline = pipe(...handleVerbStages);
