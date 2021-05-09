import conjugateToPastInformalPolite from './informalPolite';

const useCases = [
    {verb: '하다', expects: '했어요'},
    {verb: '좋아하다', expects: '좋아했어요'},
    {verb: '보다', expects: '봤어요'},
    {verb: '가다', expects: '갔어요'},
    {verb: '먹다', expects: '먹었어요'},
    {verb: '건너다', expects: '건넜어요'},
    {verb: '쓰다', expects: '썼어요'},
    {verb: '마시다', expects: '마셨어요'}
];

describe('Conjugate to past tense in informal polite way', () => {
    useCases.map(({verb, expects}) => {
        it(`${verb} returns ${expects}`, () => {
            expect(conjugateToPastInformalPolite(verb)).toBe(expects);
        });
    });
});
