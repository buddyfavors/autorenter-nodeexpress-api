'use strict';

let rewire = require('rewire');
require('chai');
require('chai-as-promised');
let sinon = require('sinon');

describe('git-data', () => {
  let gitData;
  let input;

  beforeEach(() => {
    input = {
      gitRev: {
        short: sinon.spy(),
        long: sinon.spy(),
        branch: sinon.spy(),
        tag: sinon.spy()
      }
    };
    gitData = rewire('../../server/enviornment/git-data', {'git-rev': input.gitRev});
  });

  it('should get long git commit hash', () => {
    input.gitRev.long.should.have.been.calledOnce;
  });

  it('should get short git commit hash', () => {
    input.gitRev.short.should.have.been.calledOnce;
  });

  it('should get git branch', () => {
    input.gitRev.branch.should.have.been.calledOnce;
  });

  it('should get git tag', () => {
    input.gitRev.tag.should.have.been.calledOnce;
  });

  it('should resolve promise with correct object', () => {
    let given = {
      long: 'long',
      short: 'short',
      branch: 'branch',
      tag: 'tag'
    };

    input.gitRev.short.getCall(0).args[0](given.short);
    input.gitRev.long.getCall(0).args[0](given.long);
    input.gitRev.branch.getCall(0).args[0](given.branch);
    input.gitRev.tag.getCall(0).args[0](given.tag);

    gitData.should.eventually.deep.equal(given);
  });
});

