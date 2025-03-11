function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 complete");
      }, 2000);
    });
  }
  
  task1().then(message => console.log(message));
// 

function task2() {
    return new Promise((_, reject) => {
      reject("Task 2 failed");
    });
  }
  
  task2().catch(error => console.log(error));
// 

function task3() {
    return new Promise((resolve) => {
      resolve(5);
    });
  }
  
  task3()
    .then(number => {
      const doubled = number * 2;
      return doubled;
    })
    .then(doubledNumber => {
      console.log(doubledNumber); 
    });

// 

function task4() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First");
      }, 2000);
    });
  }
  
  task4()
    .then(message => {
      console.log(message); // Logs "First"
      return new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
    })
    .then(message => {
      console.log(message); // Logs "Second"
    });

// 

function task4() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First");
      }, 2000);
    });
  }
  
  task4()
    .then(message => {
      console.log(message); // Logs "First"
      return new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
    })
    .then(message => {
      console.log(message); // Logs "Second"
    });
// 

function task5() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task 3 failed");
      }, 2000);
    });
  }
  
  task5().catch(error => console.log(error));
// 

