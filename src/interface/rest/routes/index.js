import express from 'express';
const router = express.Router();
import conjugatedVerb from './conjugatedVerb';
import health from './health';

router.use('/conjugated-verb', conjugatedVerb);
router.use('/health', health);

export default router;