const promise1 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve("Random number is greater than 0.5, resolved immediately");
    } else {
        setTimeout(() => {
            resolve("Random number was less than 0.5, resolved after 2 seconds");
        }, 2000);
    }
});

const promise2 = new Promise((resolve) => {
    const delay = Math.random() * 2000 + 1000; // Random delay between 1 and 3 seconds
    setTimeout(() => {
        resolve(`Resolved after ${delay.toFixed(0)} milliseconds`);
    }, delay);
});

const promise3 = new Promise((resolve) => {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber % 2 === 0) {
        resolve(`Random number ${randomNumber} is even`);
    } else {
        resolve(`Random number ${randomNumber} is odd`);
    }
});