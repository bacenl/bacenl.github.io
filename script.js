// Upon init, load the navbar and home page
fetch('../templates/main_header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('main-header').innerHTML = data;
});

// Upon init, load the navbar and home page
fetch('../templates/work_header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('work-header').innerHTML = data;
});

window.addEventListener('load', () => {
loadContentByHash(window.location.hash);
});


// Update active nav link based on current url hash
function updateActiveNavLink(hash) {
    const navLinks = document.querySelectorAll('.main-nav a'); // Select all nav links
    navLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('on-current'); // Add active class if hash matches
      } else {
        link.classList.remove('on-current'); // Remove active class from other links
      }
    });
}