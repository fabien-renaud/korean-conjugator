import yargs from 'yargs';
import {conjugate} from '../../domain/conjugation';
import {getVerb} from './utils';
import {validatePoliteness, validateTense, validateVerb} from './validate';

const argv = yargs
    .usage('Conjugate a Korean verb')
    .option('verb', {
        alias: 'v',
        description: 'Verb to conjugate',
        type: 'string'
    })
    .option('tense', {
        alias: 't',
        default: 'present',
        description: 'Tense to use',
        type: 'string'
    })
    .option('politeness', {
        alias: 'p',
        default: 'informalPolite',
        description: 'Politeness level to use',
        type: 'string'
    })
    .check(validateVerb)
    .check(validateTense)
    .check(validatePoliteness)
    .help()
    .alias('help', 'h').argv;

// Options values
const {tense, politeness} = argv;
const verb = getVerb(argv);
const conjugatedVerb = conjugate(verb, tense, politeness);

console.log(`${tense}/${politeness} form for ${verb}: ${conjugatedVerb}`);
