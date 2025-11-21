document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.querySelector("#timestamp");
    timestampField.value = new Date().toISOString();
})