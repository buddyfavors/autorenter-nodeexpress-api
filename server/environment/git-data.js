let gitRev = require('git-rev');

let gitData = {};

let gitLong = new Promise((resolve) => {
  gitRev.long((longVersion) => {
    gitData.long = longVersion;
    resolve();
  });
});

let gitShort = new Promise((resolve) => {
  gitRev.short((short) => {
    gitData.short = short;
    resolve();
  });
});

let gitBranch = new Promise((resolve) => {
  gitRev.branch((branch) => {
    gitData.branch = branch;
    resolve();
  });
});

let gitTag = new Promise((resolve) => {
  gitRev.tag((tag) => {
    gitData.tag = tag;
    resolve();
  });
});

module.exports = Promise.all([gitLong, gitShort, gitBranch, gitTag]).then(() => gitData);
