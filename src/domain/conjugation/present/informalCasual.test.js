import conjugateToPresentInformalCasual from './informalCasual';

const useCases = [
    {verb: '하다', expects: '해'},
    {verb: '좋아하다', expects: '좋아해'},
    {verb: '있다', expects: '있어'},
    {verb: '보다', expects: '봐'},
    {verb: '가다', expects: '가'},
    {verb: '먹다', expects: '먹어'},
    {verb: '건너다', expects: '건너'},
    {verb: '쓰다', expects: '써'},
    {verb: '마시다', expects: '마셔'}
];

describe('Conjugate to present tense in informal casual way', () => {
    useCases.map(({verb, expects}) => {
        it(`${verb} returns ${expects}`, () => {
            expect(conjugateToPresentInformalCasual(verb)).toBe(expects);
        });
    });
});
