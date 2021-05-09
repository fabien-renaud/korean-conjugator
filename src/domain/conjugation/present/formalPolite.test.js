import conjugateToPresentFormalPolite from './formalPolite';

const useCases = [
    {verb: '하다', expects: '합니다'},
    {verb: '좋아하다', expects: '좋아합니다'},
    {verb: '보다', expects: '봅니다'},
    {verb: '가다', expects: '갑니다'},
    {verb: '먹다', expects: '먹습니다'},
    {verb: '건너다', expects: '건넙니다'},
    {verb: '쓰다', expects: '씁니다'},
    {verb: '마시다', expects: '마십니다'}
];

describe('Conjugate to present tense in formal polite way', () => {
    useCases.map(({verb, expects}) => {
        it(`${verb} returns ${expects}`, () => {
            expect(conjugateToPresentFormalPolite(verb)).toBe(expects);
        });
    });
});
