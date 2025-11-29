const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;
const lastModified = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = lastModified.toLocaleString();
