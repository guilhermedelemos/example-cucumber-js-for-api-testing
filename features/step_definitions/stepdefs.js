const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const superagent = require('superagent');

function isItFriday(today) {
  if (today === 'Friday') {
    return 'TGIF';
  }
  return 'Nope';
}

Given('today is Sunday', () => {
  this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', () => {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', (expectedAnswer) => {
  expect(this.actualAnswer).to.equal(expectedAnswer);
});

Given('today is Friday', () => {
  this.today = 'Friday';
});

Given('today is {string}', (givenDay) => {
  this.today = givenDay;
});

async function httpGet(url) {
  console.log('NODE_ENV', process.env.NODE_ENV);
  console.log('TEST_ENVIRONMENT', process.env.TEST_ENVIRONMENT);
  console.log('TEST_FRAMEWORK', process.env.TEST_FRAMEWORK);

  try {
    return await superagent
      .get(url)
      .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36');
  } catch (err) {
    return err.response;
  }
}

When('I request Open Aquarium organization information', async () => {
  this.response = await httpGet('https://api.github.com/orgs/open-aquarium');
});

Then('I should see Open Aquarium public information', () => {
  expect(this.response.statusCode).to.equal(200);
  expect(this.response.body.url).to.equal('https://api.github.com/orgs/open-aquarium');
  expect(this.response.body.name).to.equal('Open Aquarium');
  expect(this.response.body.description).to.equal('A complete DIY aquarium / fishtank data logger');
  expect(this.response.body.blog).to.equal('https://open-aquarium.github.io/');
  expect(this.response.body.type).to.equal('Organization');
  expect(this.response.body.has_organization_projects).to.equal(true);
  expect(this.response.body.has_repository_projects).to.equal(true);
  expect(this.response.body.is_verified).to.equal(false);
});
