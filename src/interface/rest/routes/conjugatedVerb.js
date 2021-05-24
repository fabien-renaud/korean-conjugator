import express from 'express';
const router = express.Router();
import {conjugate} from '../../../domain/conjugation';

router.get('/:verb', (req, res) => {
    const {verb} = req.params;
    const {tense = 'present', politeness = 'informalPolite'} = req.query;
    res.send(conjugate(verb, tense, politeness));
});

export default router;
