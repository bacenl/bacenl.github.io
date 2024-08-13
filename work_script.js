// Upon init, load the work header
fetch('../../work_header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('work-header').innerHTML = data;
});

window.addEventListener('load', () => {
    loadContentByHash('#software');
    });

window.addEventListener('hashchange', () => {
    loadContentByHash(window.location.hash);
    console.log(window.location.hash)
    });


// Update active nav link based on current url hash
function updateActiveNavLink(hash) {
    const navLinks = document.querySelectorAll('.work-nav a'); 
    navLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('on-current'); 
      } else {
        link.classList.remove('on-current'); 
      }
    });
}

function loadContentByHash(hash) {
    // Default to 'home' if no hash
    let contentFile = hash ? hash.substring(1) : 'software';
    let filePath = `./works/${contentFile}.html`; 

    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.querySelector('.works-container').innerHTML = data;
        if(contentFile == 'software' || contentFile == 'games' || contentFile == 'design'){
          updateActiveNavLink('#' + contentFile);
        }
        console.log(contentFile)
      })
      .catch(err => {
        console.error('Failed to load the content:', err);
        // Redirect if content fails to load
        let currentLocationWithoutParams = window.location.protocol + "//" 
          + window.location.host 
          + window.location.pathname;

        // assign acts similar to a href redirect
        // I rather use this than replace
        window.location.assign(currentLocationWithoutParams);
    });
}

