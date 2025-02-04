// @ts-nocheck
export {};

/**
 * If / else
 */
const age = 10;

if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teenager');
} else {
  console.log('Child');
}

/**
 * Switch
 */
const color = 'blue';

switch (color) {
  case 'red':
    console.log('🔴');
    break;
  case 'blue':
    console.log('🔵');
    break;
  default:
    console.log('Unknown color');
}

/**
 * Ternary operator
 */
const userType = age >= 18 ? 'Adult' : 'Child';

/**
 * Loops
 */
const users = ['John', 'Jane', 'Jack'];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

for (const user of users) {
  console.log(user);
}

/**
 * While loop
 */
let i = 0;

while (i < users.length) {
  console.log(users[i]);
  i++;
}
