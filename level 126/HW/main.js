
const users = [
    { name: 'ანა', age: 25 },
    { name: 'ბაჩო', age: 30 },
    { name: 'გიორგი', age: 35 },
    { name: 'დავით', age: 28 },
    { name: 'ელზა', age: 22 },
    { name: 'ვერონიკა', age: 26 },
    { name: 'ზურა', age: 32 },
    { name: 'თამარ', age: 40 },
    { name: 'ივერი', age: 19 },
    { name: 'კოტე', age: 33 },
    { name: 'ლიზა', age: 29 },
    { name: 'მაია', age: 38 },
    { name: 'ნინო', age: 25 },
    { name: 'ომარ', age: 21 },
    { name: 'პეტრე', age: 28 },
    { name: 'ჟენია', age: 23 },
    { name: 'რეზო', age: 31 },
    { name: 'სალომე', age: 30 },
    { name: 'ტარიელი', age: 40 },
    { name: 'უორენ', age: 36 },
    { name: 'ფიქრია', age: 22 },
    { name: 'ქეთი', age: 27 },
    { name: 'ღუღუნა', age: 24 },
    { name: 'ყოველი', age: 32 },
    { name: 'შალვა', age: 33 },
    { name: 'ჩალიკი', age: 29 },
    { name: 'ცნობი', age: 26 },
    { name: 'ძია', age: 37 },
    { name: 'წევრილე', age: 41 },
    { name: 'ჭანჭიკი', age: 21 },
    { name: 'ხათუნა', age: 25 },
    { name: 'ჯანო', age: 34 },
    { name: 'ჰეინი', age: 30 }
];

function renderUsers(users) {
    const userList = document.getElementById('users');
    userList.innerHTML = ''; 
    
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ასაკი: ${user.age}`;
        userList.appendChild(listItem);
    });
}

renderUsers(users);

function filterByLetter(letter) {
    const filteredUsers = users.filter(user => user.name.startsWith(letter));
    renderUsers(filteredUsers);
}
