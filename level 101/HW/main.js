const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

// Load saved users from local storage
const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
savedUsers.forEach(displayUser);

// Form submission handler
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const idNumber = document.getElementById('idNumber').value;
    const height = document.getElementById('height').value;
    const description = document.getElementById('description').value;

    const email = generateEmail(firstName, lastName, age);

    const user = { firstName, lastName, age, idNumber, height, description, email };

    saveUser(user);
    displayUser(user);

    userForm.reset();
});

function generateEmail(firstName, lastName, age) {
    const randomNum = Math.floor(Math.random() * 1000);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}${randomNum}@example.com`;
}

function saveUser(user) {
    savedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(savedUsers));
}

function displayUser(user) {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';

    userCard.innerHTML = `
        <strong>Name:</strong> ${user.firstName} ${user.lastName}<br>
        <strong>Age:</strong> ${user.age}<br>
        <strong>ID:</strong> ${user.idNumber}<br>
        <strong>Height:</strong> ${user.height} cm<br>
        <strong>Description:</strong> ${user.description}<br>
        <strong>Email:</strong> ${user.email}<br>
    `;

    userList.appendChild(userCard);
}