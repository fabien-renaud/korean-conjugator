import yargs from 'yargs';
import {conjugate, isVerb, POLITENESS, TENSE} from './domain/conjugation';

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
    .help()
    .alias('help', 'h').argv;

// Options values
const {tense, politeness} = argv;
const verb = argv.verb ?? argv._[0] ?? undefined;

// Validate parameters
if (!verb) throw 'No verb provided';
if (!isVerb(verb)) throw "Word provided isn't a verb";
if (!Object.values(TENSE).includes(tense)) throw 'Tense not allowed';
if (!Object.values(POLITENESS).includes(politeness)) throw 'Politeness not allowed';

const conjugatedVerb = conjugate(verb, tense, politeness);

console.log(`${tense}/${politeness} form for ${verb}: ${conjugatedVerb}`);
