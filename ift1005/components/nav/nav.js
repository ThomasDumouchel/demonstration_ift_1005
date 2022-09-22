// Importing navbar into page
const navigation = document.querySelector("#navigation");
fetch('/ift1005/components/nav/nav.html')
    .then(res => res.text())
    .then(data => navigation.innerHTML = data);

