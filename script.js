// let change = document.querySelector("#changing");

// setInterval(() => {
//     change.style.opacity = 0; // Fade out
//     setTimeout(() => {
//         change.innerText = "DESIGNER"; // Change text after fade-out
//         change.style.opacity = 1; // Fade in
//     }, 300); // Wait for 1 second (duration of fade-out)
// }, 5000);


// setInterval(() => {
//     change.style.opacity = 0; // Fade out
//     setTimeout(() => {
//         change.innerText = "DEVELOPER"; // Change text after fade-out
//         change.style.opacity = 1; // Fade in
//     }, 300); // Wait for 1 second (duration of fade-out)
// }, 10000);
// Add this script at the end of your HTML file
document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.sidebar-toggle');
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggle) {
        sidebar.classList.remove('open');
    }
});