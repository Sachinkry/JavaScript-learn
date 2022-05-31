// Array Methods:-
// 1. forEach
// 2. filter
// 3. map
// 4. sort
// 5. reduce

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// ******* forEach ***********

companies.forEach((company) => {
    console.log(company.name);
})


// ********* filter ********

// >>>>>> get 21 and older

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

const canDrink = ages.filter((age) => {
    if (age >= 21) {
        return true;
    }
});

// you can even simplify the above function
const canDrink1 = ages.filter(age => age >= 21);

console.log(canDrink);
console.log(canDrink1);

// >>>>> filter retail companies

const retailCompanies = companies.filter(
    company => company.category === "Retail");

console.log(retailCompanies);


// ***** map ******

const companyNames = companies.map((company) => {
    return company.name;
});

console.log(companyNames);

const squares = ages.map(num => num * num);
console.log(squares);

// ******* sort ******

// sort companies by start year
const sortedCompanies = companies.sort((c1, c2) => {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});

// sort version of above code
const sortedCompanies1 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);
console.log(sortedCompanies1);

// sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);


// ******** reduce *******  a complex one; be careful and mindful

// sum of ages

let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// console.log(ageSum);

const ageSumByReduce = ages.reduce((total, age) => total + age, 0);

console.log(ageSumByReduce);

// sum of all companies duration
const reqData = companies.reduce(
    (total, company) =>
        (total + (company.end - company.start)), 0);

console.log(reqData);

// DIDN'T GET THE REDUCE METHOD :-)

// COMBINING ALL ARRAY METHODS

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);
