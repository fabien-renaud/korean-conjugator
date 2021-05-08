import yargs from 'yargs';

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
        alias: 'c',
        default: 'banmal',
        description: 'Politeness level to use',
        type: 'string'
    })
    .help()
    .alias('help', 'h')
    .argv;

const {verb, tense, politeness} = argv;
const argumentVerb = argv._[0];
console.log(`${tense}/${politeness} form for ${verb ?? argumentVerb}: 있어요`);
