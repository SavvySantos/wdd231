document.addEventListener("DOMContentLoaded", () => {
    const savedTimestamp = localStorage.getItem("formTimeStamp");
    document.querySelector("#timestampDisplay").textContent = savedTimestamp;
});

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const fname = params.get('first');
    const lname = params.get('last');
    const email = params.get('email');
    const number = params.get('number');
    const eventDate = params.get('event-date');
    const eventFood = params.getAll('options');
    const eventDescription = params.get('description');

    document.querySelector("#first").textContent = fname;
    document.querySelector("#last").textContent = lname;
    document.querySelector("#email").textContent = email;
    document.querySelector("#number").textContent = number;
    document.querySelector("#date").textContent = eventDate;
    document.querySelector("#food").textContent = eventFood.join(", ");
    document.querySelector("#description").textContent = eventDescription;
});
