/** index.ts **/
//#!/usr/bin/env node

const run = async () => {
    debugger;
    const result = await Promise.all([1, 2, 3].map(x => getPromise(x)));
    debugger;
}

const getPromise = async (x: number) => {
    let count = 0;
    for (let i = 0; i < x * 100000000; i++) {
        count += i;
    }
    console.info(`count done`);
    await timeout(x * 1000);
    return count;
}

const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

run();
