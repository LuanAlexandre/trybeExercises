const getRepos = require('./exercise4');

describe('check repository', () => {
  it(`verify the existence of 'sd-01-week4-5-project-todo-list' and 'sd-01-week4-5-project-meme-generator'`, async () => {
    const toDoList = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(toDoList).toContain('sd-01-week4-5-project-todo-list');
    expect(toDoList).toContain('sd-01-week4-5-project-meme-generator');
  });
});

