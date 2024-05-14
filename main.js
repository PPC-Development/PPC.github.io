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

//Format
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
  var copyCounter = localStorage.getItem('copyCounter');
  if (copyCounter) {
    copyCounter = parseInt(copyCounter);
    copyCounter += 1;
  } else {
    copyCounter = 1;
  }
  localStorage.setItem('copyCounter', copyCounter);
  document.getElementById('copyCounter').textContent = copyCounter;

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
