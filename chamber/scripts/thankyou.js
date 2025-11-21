document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const fname = params.get('first');
    const lname = params.get('last');
    const email = params.get('email');
    const number = params.get('number');
    const businessName = params.get('businessName');
    const timestamp = params.get('timestamp');
    const readable = new Date(timestamp).toLocaleString();

    document.querySelector("#first").textContent = fname;
    document.querySelector("#last").textContent = lname;
    document.querySelector("#email").textContent = email;
    document.querySelector("#number").textContent = number;
    document.querySelector("#businessName").textContent = businessName;
    document.querySelector("#timestamp").textContent = readable;
});
