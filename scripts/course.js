document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.querySelector(".course-list");
    const buttons = document.querySelectorAll(".course-buttons button");
    const totalCredits = document.querySelector(".credit-total");
    const courseDetails = document.querySelector("#course-details");

const classes = [
    {
        subject: "WDD",
        title: "Web Fundamentals",
        certificate: "Web and Computer Programming",
        description: "Introduces the basics of building modern web pages using HTML and CSS. Students learn how to structure content, apply visual styling, and create simple, responsive layouts. By the end of the course, learners can design and publish a functional, well-organized websit.",
        technology: ["HTML ", "CSS"],
        number: "130",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        title: "Dynamic Web Fundamentals",
        certificate: "Web and Computer Programming",
        description: "Builds on basic web skills by introducing JavaScript for creating interactive, dynamic web pages. Students learn how to manipulate the DOM, respond to user actions, and enhance user experiences with scripts. By the end, learners can add meaningful functionality to their websites using clean, well-organized code.",
        technology: ["HTML ", "CSS ", "JavaScript"],
        number: "131",
        credits: 2,
        completed: true

    },
    {
        subject: "WDD",
        title: "Web Frontend Development I",
        certificate: "Web and Computer Programming",
        description: "Focuses on modern frontend development practices, including responsive design, component-based layouts, and improved usability. Students work with advanced CSS and JavaScript to build polished, professional interfaces. The course emphasizes real-world problem solving and prepares learners for more complex web development work.",
        technology: ["HTML ", "CSS ", "JavaScript"],
        number: "231",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        title: "Introduction to Programming",
        certificate: "Web and Computer Programming",
        description: "Introduces foundational programming concepts using Python. Students learn about variables, loops, conditionals, and basic problem-solving techniques. By the end of the course, learners can write simple programs and understand the logical structure behind them.",
        technology: ["Python"],
        number: "110",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        title: "Programming with Functions",
        certificate: "Web and Computer Programming",
        description: "Continues Python programming with a focus on writing clean, modular code using funtions. Students learn parameter passing, return values, organization, and debugging practices. The course strengthens problem-solving skills by breaking larger tasks into reusable pieces.",
        technology: ["Python"],
        number: "111",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        title: "Programming with Classes",
        certificate: "Web and Computer Programming",
        description: "Introduces object-oriented programming using C#. Students learn how to design classes, create objects, and sructure programs using principles like encapsulation and responsibility. By the end, learners can build more scalable and organized applications using OOP techniques.",
        technology: ["C#"],
        number: "210",
        credits: 2,
        completed: true
    },
];

    function displayCourses(filter) {
        courseList.innerHTML = "";
        const filtered = classes.filter(course =>
            filter === "All" || course.subject === filter
        );

        filtered.forEach(course => {
            const btn = document.createElement("button");
            btn.classList.add("course-btn");

            const status = course.completed ? "✅" : "";
            btn.textContent = `${status} ${course.subject} ${course.number}`;

            btn.addEventListener("click", () => displayCourseDetails(course));

            courseList.appendChild(btn);

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

        function displayCourseDetails(course) {
            courseDetails.innerHTML = `
            <button id='closeModal'>❌</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Credits</strong>: ${course.credits}</p>
            <p><strong>Certificate</strong>: ${course.certificate}</p>
            <p><strong>Class Desctiption:</strong></p>
            <p>${course.description}</p>
            <p><strong>Technologies</strong>: ${course.technology.join(',')}</p>
            `;

            courseDetails.showModal();

            const closeModal = document.querySelector("#closeModal");

            closeModal.addEventListener("click", () => {
                courseDetails.close();
            });
        }
    displayCourses("All");
});