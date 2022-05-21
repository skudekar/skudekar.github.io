window.addEventListener("load", startup, false);
var numOfVideo = 0
let list_of_videos = ["test-cap-and-tony-a-modulation-everywhere.mp4", "test_james-bond-dark-oklabal_adap-1.mp4", "test_harry-met-sally.mp4"]
let screenWidth = window.screen.width * window.devicePixelRatio // send this to Python server for decoder processing; this is the 'width' of the screen
let screenHeight = window.screen.height * window.devicePixelRatio // send this to Python server for decoder processing; this is the 'height' of the screen

function startup() {
  
 
  // Get the reference to video
  const videoSection = document.getElementById("videoSection");

  videoSection.style.display = "none";

  // On pressing ENTER call toggleFullScreen method
  document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      toggleFullScreen(video);
    }
  }, false);
}

function playVideo() {    
  console.log("Inside playVideo:= ", numOfVideo)
  const videoSection = document.getElementById("videoSection");
  const runVideoButton = document.getElementById("runVideoButton");
  videoSection.style.display = "block";

  //document.getElementById("screenHeight").innerHTML = screenHeight;
  //document.getElementById("screenWidth").innerHTML = screenWidth;

  const video = document.getElementById("video");  
 
  video.src = "assets/videos/" + list_of_videos[numOfVideo]
  video.load()
  video.play()
  numOfVideo += 1
  runVideoButton.innerText = 'Run another video'
  if (numOfVideo >= list_of_videos.length) {
      numOfVideo = 0
  }

  //const runVideoButton = document.getElementById("runVideoButton");
  //runVideoButton.style.display = "none"
}

function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}