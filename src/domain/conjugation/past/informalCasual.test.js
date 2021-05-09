import conjugateToPastInformalCasual from './informalCasual';

const useCases = [
    {verb: '하다', expects: '했어'},
    {verb: '좋아하다', expects: '좋아했어'},
    {verb: '보다', expects: '봤어'},
    {verb: '가다', expects: '갔어'},
    {verb: '먹다', expects: '먹었어'},
    {verb: '건너다', expects: '건넜어'},
    {verb: '쓰다', expects: '썼어'},
    {verb: '마시다', expects: '마셨어'}
];

describe('Conjugate to past tense in informal casual way', () => {
    useCases.map(({verb, expects}) => {
        it(`${verb} returns ${expects}`, () => {
            expect(conjugateToPastInformalCasual(verb)).toBe(expects);
        });
    });
});
