const emails = [
    { subject: "მოგზაურობა", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-10" }
  ];
  
  const emailList = document.getElementById("emailList");
  const filterSelect = document.getElementById("filter");
  const newSubject = document.getElementById("newSubject");
  const newContent = document.getElementById("newContent");
  const newDate = document.getElementById("newDate");

  document.getElementById("applyFilter").addEventListener("click", () => {
    const filterValue = filterSelect.value;
    emailList.innerHTML = ""; 
  
    for (const email of emails) {
      if (filterValue === "" || email.subject.startsWith(filterValue)) {
        const listItem = document.createElement("li");
        listItem.textContent = `თემა: ${email.subject} | შიგთავსი: ${email.content} | თარიღი: ${email.receivedDate}`;
        emailList.appendChild(listItem);
      }
    }
  });

  document.getElementById("addEmail").addEventListener("click", () => {
    const subject = newSubject.value.trim();
    const content = newContent.value.trim();
    const date = newDate.value.trim();
  
    if (!subject || !content || !date) {
      alert("გთხოვთ, შეავსოთ ყველა ველი!");
      return;
    }
  

    emails.push({ subject, content, receivedDate: date });
  

    newSubject.value = "";
    newContent.value = "";
    newDate.value = "";
  

    alert("ფოსტი წარმატებით დაემატა!");
  });
  