function task5() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, 2000);
  });
}

task5().catch(error => console.log(error));
// 

function task6() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000; 
    setTimeout(() => {
      resolve("Task 1 complete");
    }, delay);
  });
}

task6().then(message => console.log(message));
// 

function task7() {
  return new Promise((resolve) => {
    const delay1 = Math.floor(Math.random() * 3000) + 1000; 
    setTimeout(() => {
      resolve("First");
    }, delay1);
  })
  .then(message => {
    console.log(message);
    const delay2 = Math.floor(Math.random() * 3000) + 1000; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Second");
      }, delay2);
    });
  })
  .then(message => console.log(message));
}

task7();
// 

function task8() {
  return new Promise((_, reject) => {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    setTimeout(() => {
      reject("Task 3 failed");
    }, delay);
  });
}

task8().catch(error => console.log(error));
// 

function task9() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000; 
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve("Task 1 complete");
      } else {
        resolve("Task 1 was quick");
      }
    }, delay);
  });
}

task9().then(message => console.log(message));
// 

function task10() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.3) {
        reject("Task 3 failed");
      } else {
        resolve("Task 3 complete");
      }
    }, delay);
  });
}

task10()
  .then(message => console.log(message))
  .catch(error => console.log(error));

