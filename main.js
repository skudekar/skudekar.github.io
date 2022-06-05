window.addEventListener("load", startup, false);
var numOfVideo = 0
let list_of_videos = ["test_cap-and-tony_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_james-bond-macau-dark_oklabal_adap4_modDepth=0.06_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_rocky-steps-cropped_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_big-buck-long-clip_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_shawshank-ending_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_harry-met-sally-cropped_oklabal_adap0_modDepth=0.07_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_ff_oklabal_adap4_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_stranger-things_oklabal_adap0_modDepth=0.08_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4"]
let screenWidth = window.screen.width * window.devicePixelRatio // send this to Python server for decoder processing; this is the 'width' of the screen
let screenHeight = window.screen.height * window.devicePixelRatio // send this to Python server for decoder processing; this is the 'height' of the screen

function startup() {
  
 
  // Get the reference to video
  const videoSection = document.getElementById("videoSection");
  const videoAndTextSection = document.getElementById("videoAndTextSection");
  videoAndTextSection.style.display = "none";

  // On pressing ENTER call toggleFullScreen method
  const video = document.getElementById("video");  
  document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      toggleFullScreen(video);
    }
  }, false);
}

function playVideo() {    
  console.log("Inside playVideo:= ", numOfVideo)
  const videoAndTextSection = document.getElementById("videoAndTextSection");
  videoAndTextSection.style.display = "block";
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
  const videoPlayer = document.getElementById("video");  
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
    //videoPlayer.style.width = 'auto'
    //videoPlayer.style.height = '100%'
  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
      //videoPlayer.style.width = '480px'      
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