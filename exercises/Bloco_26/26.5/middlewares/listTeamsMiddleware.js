import { readFileSync } from 'fs';

const teamsFile = './utils/data/teams.json';

const listTeams = (_req, res) => {
  const content = JSON.parse(readFileSync(teamsFile));

  return res.status(200).json(content);
}

export default listTeams;