import React from "react";

const Test = () => {
  let animals = [
    { title: "cat", optionid: 7, points: 1 },
    { title: "cat", optionid: 7, points: 3 },
    { title: "cat", optionid: 7, points: 1 },
    { title: "dog", optionid: 8, points: 3 },
    { title: "dog", optionid: 8, points: 2 },
    { title: "dog", optionid: 8, points: 3 },
    { title: "pig", optionid: 9, points: 2 },
    { title: "pig", optionid: 9, points: 1 },
    { title: "pig", optionid: 9, points: 1 },
  ];

  // create new object to store results in
  let newObj = {};

  // loop through animal objects
  animals.forEach(function (animal) {
    // check if animal type has already been added to newObj
    if (!newObj[animal.title]) {
      // If it is the first time seeing this animal type
      // we need to add title and points to prevent errors
      newObj[animal.title] = {};
      newObj[animal.title]["points"] = 0;
    }
    // add animal points to newObj for that animal type.
    newObj[animal.title]["points"] += animal.points;
  });

  let result = animals.reduce(function (acc, v) {
    acc[v.title] = (acc[v.title] || 0) + v.optionid;
    return acc;
  }, {});

  return <div>Test</div>;
};

export default Test;
