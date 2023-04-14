const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

const aggregate = (arr, on, who) => {
  const agg = arr.reduce((acc, currObj) => {
    const onValue = currObj[on];
    const whoValue = currObj[who];

    if (acc[onValue]) {
      acc[onValue] = {
        [on]: onValue,
        [who]: [...acc[onValue][who], whoValue],
      };
    } else {
      acc[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    }
    return acc;
  }, {});
  return Object.values(agg);
};

const result = aggregate(endorsements, "user", "skill");
console.log(result);

// OUTPUT
// [
//   {
//     user: "Bill",
//     skill: ["css", "javascript"],
//   },
//   {
//     user: "Chad",
//     skill: ["javascript"],
//   },
//   {
//     user: "Sue",
//     skill: ["css", "javascript", "html"],
//   },
// ];
