/* Smooth scroll */
const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

let activeTag = function (curTag) {
    let allTags = document.querySelectorAll(".pets__tab")
    for (let i = 0; i < allTags.length; i++) {
        allTags[i].classList.remove("pets__tab--active")
    }
    curTag.classList.add("pets__tab--active")
}