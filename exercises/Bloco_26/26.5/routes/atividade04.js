import express from 'express';
import rescue from 'express-rescue';
import validateName from '../middlewares/validateNameMiddleware.js';
import validateInitials from '../middlewares/validateInitialsMiddleware.js';
import validateCountry from '../middlewares/validateCountryMiddleware.js';
import createTeam from '../middlewares/createTeamMiddleware.js';
import listTeams from '../middlewares/listTeamsMiddleware.js';

const router = express.Router();

router.get(
  '*',
  rescue(listTeams),
);

router.post(
  '*',
  rescue(validateCountry),
  rescue(validateInitials),
  rescue(validateName),
  rescue(createTeam),
);

export default router;
