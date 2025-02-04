// @ts-nocheck
export {};

/**
 * On a les opérateurs mathématiques classiques
 */
const age = 10;
const isAdult = age >= 18;
const isChild = age < 13;

/**
 * On a les opération logiques classiques
 */
const isNotAdult = !isAdult;
const isAdultOrChild = isAdult || isChild;
const isTeenager = !isChild && !isAdult;

const test1 = undefined ?? 12; // 12
const test2 = null ?? 12; // 12
const test3 = 0 ?? 12; // 0

/**
 * On peut tout comparer
 */
const comparison1 = 1 == '1'; // true
const comparison2 = 1 === '1'; // false
const comparison3 = 1 > []; // true
