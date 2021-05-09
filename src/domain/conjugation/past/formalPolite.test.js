import conjugateToPastFormalPolite from './formalPolite';

const useCases = [
    {verb: '하다', expects: '했습니다'},
    {verb: '좋아하다', expects: '좋아했습니다'},
    {verb: '있다', expects: '있었습니다'},
    {verb: '보다', expects: '봤습니다'},
    {verb: '가다', expects: '갔습니다'},
    {verb: '먹다', expects: '먹었습니다'},
    {verb: '건너다', expects: '건넜습니다'},
    {verb: '쓰다', expects: '썼습니다'},
    {verb: '마시다', expects: '마셨습니다'}
];

describe('Conjugate to past tense in formal polite way', () => {
    useCases.map(({verb, expects}) => {
        it(`${verb} returns ${expects}`, () => {
            expect(conjugateToPastFormalPolite(verb)).toBe(expects);
        });
    });
});
