import hangulJs from 'hangul-js';
import {arrayIncludes, findLast, last, pipe} from '../../fp';
import {CONSONANTS, VOWELS} from './constants';

export const isVerb = (hangul) => /(?:다|ㄷㅏ)$/.test(hangul);
export const isHadaVerb = (hangul) => /(?:하다|ㅎㅏㄷㅏ)$/.test(hangul);
export const isConsonant = arrayIncludes(CONSONANTS);
export const isVowel = arrayIncludes(VOWELS);
export const endsWithConsonant = pipe(last, isConsonant);
export const findLastConsonant = findLast(isConsonant);
export const findLastVowel = findLast(isVowel);

export const decomposeVerb = (verb) => {
    const disassembledVerb = hangulJs.disassemble(verb).join('');
    const {verbStem} = /(?<verbStem>.*)ㄷㅏ$/.exec(disassembledVerb)?.groups ?? {};
    return {
        verb,
        conjugatedVerb: verbStem,
        isHada: isHadaVerb(verb),
        lastVowel: findLastVowel(verbStem),
        lastConsonant: findLastConsonant(verbStem),
        hasFinal: endsWithConsonant(verbStem),
        skipRegularStage: false
    };
};

export const composeVerb = (decomposedVerb) => hangulJs.assemble(decomposedVerb.conjugatedVerb);
