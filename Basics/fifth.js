// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

function wait(a, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(a)
            resolve()
        }, timeout);
    });
}

async function print() {
    console.log('a');
    console.log('b');
    await wait('c', 3000)
    await wait('d', 0)
    console.log('e');
}

print();