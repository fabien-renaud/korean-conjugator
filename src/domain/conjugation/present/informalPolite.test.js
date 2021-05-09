import conjugateToPresentInformalPolite from './informalPolite';

const useCases = [
    {verb: '하다', expects: '해요'},
    {verb: '좋아하다', expects: '좋아해요'},
    {verb: '보다', expects: '봐요'},
    {verb: '가다', expects: '가요'},
    {verb: '먹다', expects: '먹어요'},
    {verb: '건너다', expects: '건너요'},
    {verb: '쓰다', expects: '써요'},
    {verb: '마시다', expects: '마셔요'}
];

describe('Conjugate to present tense in informal polite way', () => {
    useCases.map(({verb, expects}) => {
        it(`${verb} returns ${expects}`, () => {
            expect(conjugateToPresentInformalPolite(verb)).toBe(expects);
        });
    });
});
