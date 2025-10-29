document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.querySelector(".course-list");
    const buttons = document.querySelectorAll(".course-buttons button");
    const totalCredits = document.querySelector(".credit-total");

const classes = [
    {
        courseName: "WDD 130 - Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        courseName: "WDD 131 - Dynamic Web Fundamentals",
        credits: 2,
        completed: true

    },
    {
        courseName: "WDD 231 - Web Frontend Development I",
        credits: 2,
        completed: false
    },
    {
        courseName: "CSE 110 - Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        courseName: "CSE 111 - Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        courseName: "CSE 210 - Programming with Classes",
        credits: 2,
        completed: true
    },
];

    function displayCourses(filter) {
        courseList.innerHTML = "";
        const filtered = classes.filter(course =>
            filter === "All" || course.courseName.startsWith(filter)
        );

        filtered.forEach(course => {
            const p = document.createElement("p");
            const status = course.completed ? "✅" : "";
            p.textContent = `${status} ${course.courseName} (${course.credits} credits)`;
            courseList.appendChild(p);
        });
        
        const total = filtered.reduce((sum, c) => sum + c.credits, 0);
        totalCredits.textContent = `The total credits for course listed above is ${total}`;
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.textContent.trim();
            displayCourses(filter);
            });
        });
    displayCourses("All");
});