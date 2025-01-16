function printKeyValuePairs(array) {
    for (const obj of array) {
      for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
      }
    }
  }
  
  const data = [
    { name: 'lasha', age: 30 },
    { name: 'merabi', age: 15 }
  ];
  
  printKeyValuePairs(data);
  