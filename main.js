// Funktion zur Initialisierung des Counters
function initCounter() {
    // Überprüfen, ob der Counter bereits im Local Storage vorhanden ist
    if (!localStorage.getItem('globalCopyCounter')) {
        // Wenn nicht, setze den Counter auf 0
        localStorage.setItem('globalCopyCounter', 0);
    }
}

// Funktion zum Aktualisieren des Counters
function updateCounter() {
    // Counterwert aus dem Local Storage abrufen und um 1 erhöhen
    let counter = parseInt(localStorage.getItem('globalCopyCounter')) || 0;
    counter++;
    // Counterwert im Local Storage aktualisieren
    localStorage.setItem('globalCopyCounter', counter);
    // Counter auf der Seite aktualisieren
    document.getElementById('globalCopyCounter').textContent = counter;
}

// Event Listener hinzufügen, um den Counter zu aktualisieren, wenn das Skript kopiert wird
document.getElementById('copyButton').addEventListener('click', function(event) {
    // Counter aktualisieren
    updateCounter();
    // Hier den Code zum Kopieren des Skripts einfügen
});

// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});

//Filter
$(document).ready(function () {
  // Initial hide
  $(".post-box.changelogs").hide();

  $(".filter-item").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all") {
          $(".post-box.changelogs").hide("1000");
          $(".post-box").not(".changelogs").show("1000");
      } else {
          $(".post-box").hide(1000);
          $(".post-box").filter("." + value).show("1000");
      }
      $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});

// On page load
document.addEventListener('DOMContentLoaded', function () {
  // Initialisiere den Counter
  initCounter();
  var copyCounter = localStorage.getItem('globalCopyCounter');
  if (copyCounter) {
    document.getElementById('globalCopyCounter').textContent = copyCounter;
  }
});

function copyCode(event, button, url) {
  event.preventDefault();

  var code = 'loadstring(game:HttpGet("' + url + '"))()';

  var tempInput = document.createElement('textarea');
  tempInput.value = code;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  button.innerHTML = 'Copied';

  // Update Counter
  updateCounter();

  setTimeout(function() {
      button.innerHTML = 'Script';
  }, 2000);
}

function openYouTube() {
  window.open('https://www.youtube.com/@ProjectpopCat');
}

function openDiscord() {
  window.open('https://discord.com/invite/2WXkCdZHVn');
}
