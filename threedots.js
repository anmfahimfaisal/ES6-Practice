const ages = [12, 13, 16, 17, 11];
const ages2 = [15, 16, 12];
const ages3 = [25, 28, 40];

//Previously

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 650;
const govt = 450;
const startup = 250;

const totalMoney = [650, 450, 250];
//const maximum = Math.max(business, govt, startup); //Old 

const maximum = Math.max(...totalMoney);
console.log(maximum);