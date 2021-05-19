import {conjugate} from '../../../src/domain/conjugation';
import regularDataset from './datasets/regular-dataset.json';
import bieupDataset from './datasets/bieup-irregulars-dataset.json';
import digeutDataset from './datasets/digeut-irregulars-dataset.json';
import euDataset from './datasets/eu-irregulars-dataset.json';
import hieutDataset from './datasets/hieut-irregulars-dataset.json';
import reuDataset from './datasets/reu-irregulars-dataset.json';
import rieulDataset from './datasets/rieul-irregulars-dataset.json';
import shiotDataset from './datasets/shiot-irregulars-dataset.json';
import uniquesDataset from './datasets/uniques-irregulars-dataset.json';

const tenseToTest = ['present', 'past'];
const politenessToTest = ['informalPolite', 'informalCasual'];

const datasets = [
    {name: 'Regular', dataset: regularDataset},
    {name: 'Bieup', dataset: bieupDataset},
    {name: 'Digeut', dataset: digeutDataset},
    // {name: 'Eu', dataset: euDataset},
    {name: 'Hieut', dataset: hieutDataset},
    {name: 'Shiot', dataset: shiotDataset},
    // {name: 'Reu', dataset: reuDataset},
    {name: 'Rieul', dataset: rieulDataset},
    {name: 'Uniques', dataset: uniquesDataset}
];

// Should flatten this later
describe('Conjugate irregulars', () => {
    // Generate suit test for each dataset
    datasets.forEach(({name, dataset}) => {
        // For each tense / politeness
        tenseToTest.forEach((tense) => {
            politenessToTest.forEach((politeness) => {
                describe(`${name} dataset - ${tense}/${politeness}`, () => {
                    // Generate test for each verb
                    Object.keys(dataset).forEach((verb) => {
                        test(`${verb} returns ${dataset[verb][tense + '/' + politeness]}`, () => {
                            expect(conjugate(verb, tense, politeness)).toBe(dataset[verb][`${tense}/${politeness}`]);
                        });
                    });
                });
            });
        });
    });
});
