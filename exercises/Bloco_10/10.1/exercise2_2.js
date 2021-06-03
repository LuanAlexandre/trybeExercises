const techList = (technologies, name) => {
  if (technologies.length === 0) return `Vazio!`;
  return technologies.sort().reduce((acc, curr) => {
    const technology = {tech: curr, name};
    acc.push(technology);
    return acc;
  }, []);
};

module.exports = techList;
