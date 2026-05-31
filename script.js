
function showToast() {
  var x = document.getElementById("snackbar");
  x.className = "show"; // Add the "show" class to DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000); // After 3 seconds, remove the show class
}
let form = document.querySelector("#form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let data = new FormData(form);
  await fetch(form.action, {
    method: "POST",
    body: data
  });
   
  form.reset();
  showToast(); // now it actually makes sense
});


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