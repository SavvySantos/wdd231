document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.querySelector("#timestamp");
    timestampField.value = new Date().toISOString();
})

document.addEventListener("DOMContentLoaded", () => {
    const timestamp = new Date().toISOString();

    const timestampField = document.querySelector("#timestamp");
    timestampField.value = timestamp;

    localStorage.setItem("formTimestamp", timestamp);
});