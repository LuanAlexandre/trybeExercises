import { readFileSync, writeFileSync, existsSync } from 'fs';

const teamsFile = './utils/data/teams.json';

const createTeam = (req, res) => {
  const { name, initials, country } = req;
  const { league } = req.body;
  const hasFile = existsSync(teamsFile);
  let newTeam;

  if (!league)
  newTeam = { name, initials, country, league: 'campo não informado' };
  else
  newTeam = { name, initials, country, league };

  if (!hasFile)
  writeFileSync(teamsFile, JSON.stringify([newTeam]));
  else {
    const content = readFileSync(teamsFile);
    if (!content) {
      writeFileSync(teamsFile, JSON.stringify([newTeam]));
    } else {
      writeFileSync(teamsFile, JSON.stringify([...content, newTeam]));
    }
  }

  return res.status(200).json(newTeam);
}

export default createTeam;
