const emails = [
    { subject: "მოგზაურობა", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "არ ვიცი აქ რა დავწერო ამიტომ ...", receivedDate: "2024-12-10" }
  ];
  
  document.getElementById("applyFilter").addEventListener("click", () => {
    const filterValue = document.getElementById("filter").value;
    const emailList = document.getElementById("emailList");
    emailList.innerHTML = ""; 
  
    for (const email of emails) {
      if (filterValue === "" || email.subject.startsWith(filterValue)) {
        const listItem = document.createElement("li");
        listItem.textContent = `თემა: ${email.subject} | შიგთავსი: ${email.content} | თარიღი: ${email.receivedDate}`;
        emailList.appendChild(listItem);
      }
    }
  });
  