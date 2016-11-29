'use strict';

const assert = require('assert');
const generateId = require('../../../server/models/JsonFiles/generateId');

describe('models/JsonFiles/generateId', () => {

  it('generates different IDs for different objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 3, b: 4 };
    const id1 = generateId(obj1);
    const id2 = generateId(obj2);

    assert(id1 !== id2);
  });

  it('generates different IDs for the same object at different times', () => {
    const obj = { a: 1, b: 2 };
    const id1 = generateId(obj);

    return new Promise((resolve) => setTimeout(resolve, 10))
      .then(() => generateId(obj))
      .then((id2) => assert(id1 !== id2));
  });

});
