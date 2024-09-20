window.addEventListener('scroll', function() {
    var scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 800) { // Når brugeren scroller mere end 100px ned
        scrollIndicator.style.display = 'none'; // Skjul pilen
    } else {
        scrollIndicator.style.display = 'block'; // Vis pilen igen, hvis man scroller op
    }
});
  
  // Funktion til at vise kolonnen efter 400px scroll
  window.onscroll = function() {
    var stickyColumn = document.getElementById("stickyColumn");

    if (window.scrollY > 600) {
        stickyColumn.style.visibility = "visible";
        stickyColumn.style.opacity = "1";
    } else {
        stickyColumn.style.visibility = "hidden";
        stickyColumn.style.opacity = "0";
    }
};

// Vælg alle video-elementer med klassen 'auto-video'
const videos = document.querySelectorAll('.auto-video');

// Gå igennem hver video og tilføj en klik-event listener
videos.forEach(video => {
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play(); // Hvis videoen er pauset, afspil den ved klik
        } else {
            video.pause(); // Hvis videoen allerede afspilles, pauser den ved klik
        }
    });
});