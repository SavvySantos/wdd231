document.addEventListener("DOMContentLoaded", () => {
    const message = document.querySelector('#visit-message');

    const lastVisit = localStorage.getItem('last-visit');

    const now = Date.now();

    if (!lastVisit) {
        message.textContent = "Welcome! Let us know how we can help you!";
    } else {
        const lastTime = Number(lastVisit);
        const difference = now - lastTime;

        const daysBetween = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (daysBetween <1) {
            message.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            message.textContent = "You last visited 1 day ago."
        } 
        
        else {
            message.textContent = `You last visited ${daysBetween} days ago.`
        }
    }

    localStorage.setItem("last-visit", now)
})