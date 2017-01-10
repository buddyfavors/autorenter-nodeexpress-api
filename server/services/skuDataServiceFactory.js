'use strict';

function build() {
  const skus = [
    {makeId: 'tsl', modelId: 'tms', year: 2016, color: 'Black'},
    {makeId: 'tsl', modelId: 'tmx', year: 2016, color: 'Black'},
    {makeId: 'tsl', modelId: 'tms', year: 2017, color: 'Black'},
    {makeId: 'tsl', modelId: 'tms', year: 2017, color: 'Silver'},
    {makeId: 'tsl', modelId: 'tmx', year: 2017, color: 'Black'},
    {makeId: 'tsl', modelId: 'tmx', year: 2017, color: 'Silver'},
    {makeId: 'che', modelId: 'cvt', year: 2016, color: 'Black'},
    {makeId: 'che', modelId: 'cvt', year: 2016, color: 'Red'},
    {makeId: 'che', modelId: 'cvt', year: 2017, color: 'Black'},
    {makeId: 'che', modelId: 'cvt', year: 2017, color: 'Red'},
    {makeId: 'frd', modelId: 'fxp', year: 2016, color: 'Black'},
    {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Black'},
    {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Red'},
    {makeId: 'frd', modelId: 'fta', year: 2016, color: 'Silver'},
    {makeId: 'frd', modelId: 'fxp', year: 2017, color: 'Black'},
    {makeId: 'frd', modelId: 'fxp', year: 2017, color: 'Silver'},
    {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Black'},
    {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Red'},
    {makeId: 'frd', modelId: 'fta', year: 2017, color: 'Silver'}
  ];

  function getData() {
    return new Promise(
      (resolve) => {
        resolve(skus);
      });
  }

  return {getData};
}

module.exports = {build};
