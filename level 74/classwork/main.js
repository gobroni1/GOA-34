// მიიღეთ div ბლოკი ID-ს საშუალებით
const contentDiv = document.getElementById("content");

// innerHTML-ის გამოყენებით დაამატეთ ელემენტები
contentDiv.innerHTML = `
  <p>ეს არის პირველი პარაგრაფი.</p>
  <p>ეს არის მეორე პარაგრაფი.</p>
  <p>ეს არის მესამე პარაგრაფი.</p>
  <button onclick="alert('პირველი ღილაკი დაჭერილია')">ღილაკი 1</button>
  <button onclick="alert('მეორე ღილაკი დაჭერილია')">ღილაკი 2</button>
  <ul>
    <li>პუნქტი 1</li>
    <li>პუნქტი 2</li>
    <li>პუნქტი 3</li>
  </ul>
`;
