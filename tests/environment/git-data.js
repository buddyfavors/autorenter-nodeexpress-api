'use strict';

let proxyquire = require('proxyquire');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinon = require('sinon');

chai.use(chaiAsPromised);


describe('git-data', () => {
  let gitData;
  let input;
  let sandbox;
  let mocks;

  beforeEach(() => {
    input = {
      long: 'long',
      short: 'short',
      branch: 'branch',
      tag: 'tag'
    };
    sandbox = sinon.sandbox.create();

    mocks = {
      gitRev: {},
    };

    Object.keys(input).forEach((key) => {
      mocks.gitRev[key] = (callback) => callback(input[key]);
      sandbox.spy(mocks.gitRev, key);
    });

    return proxyquire('../../server/environment/git-data', {
      'git-rev': mocks.gitRev,
    }).then((results) => {
      gitData = results;
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get long git commit hash', () => {
    return mocks.gitRev.long.should.have.been.calledOnce;
  });

  it('should get short git commit hash', () => {
    return mocks.gitRev.short.should.have.been.calledOnce;
  });

  it('should get git branch', () => {
    return mocks.gitRev.branch.should.have.been.calledOnce;
  });

  it('should get git tag', () => {
    return mocks.gitRev.tag.should.have.been.calledOnce;
  });

  it('should resolve promise with correct object', () => {
    return gitData.should.deep.equal(input);
  });
});

