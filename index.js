document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const section = document.querySelector(link.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        alert("Message Sent!");
    });
});
