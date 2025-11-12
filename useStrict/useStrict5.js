'use strict';

const stringToArray = (str) => {
    let array = str.trim().replace(/[^\w\s]|_/g, "").split(/\s+/);
    return array;
};

