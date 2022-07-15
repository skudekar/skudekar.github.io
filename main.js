window.addEventListener("load", startup, false);
var numOfVideo = 0
//let list_of_videos = ["test_cap-and-tony_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4",  "test_rocky-steps-cropped_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_harry-met-sally_oklabal_adap0_modDepth=0.07_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_shawshank_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_big-buck_oklabal_adap0_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_james-bond-macau-dark_oklabal_adap4_modDepth=0.06_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_ff_oklabal_adap4_modDepth=0.065_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4", "test_stranger-things_oklabal_adap0_modDepth=0.08_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=17_frameInterpolation=linear.mp4"]
//let list_of_videos = ["test_cap-and-tony_oklabal_adap0_modDepth=0.05_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4",  "test_rocky-steps-cropped_oklabal_adap0_modDepth=0.05_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4", "test_harry-met-sally_oklabal_adap0_modDepth=0.06_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4", "test_shawshank_oklabal_adap0_modDepth=0.055_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4", "test_big-buck_oklabal_adap0_modDepth=0.05_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4", "test_james-bond-macau-dark_oklabal_adap4_modDepth=0.055_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4", "test_ff_oklabal_adap4_modDepth=0.055_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4", "test_stranger-things_oklabal_adap0_modDepth=0.07_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=10_frameInterpolation=linear.mp4"]
let list_of_videos = ["test_cap-and-tony_oklabal_adap0_modDepth=0.0525_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=12_frameInterpolation=linear.mp4",  "test_rocky-steps-cropped_oklabal_adap0_modDepth=0.05_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=12_frameInterpolation=linear.mp4", "test_harry-met-sally_oklabal_adap0_modDepth=0.06_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=12_frameInterpolation=linear.mp4", "test_shawshank_oklabal_adap0_modDepth=0.057_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=12_frameInterpolation=linear.mp4", "test_big-buck_oklabal_adap0_modDepth=0.055_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=12_frameInterpolation=linear.mp4", "test_james-bond-macau-dark_oklabal_adap4_modDepth=0.055_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=14_frameInterpolation=linear.mp4", "test_ff_oklabal_adap4_modDepth=0.055_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=14_frameInterpolation=linear.mp4", "test_stranger-things_oklabal_adap0_modDepth=0.0725_minLval=0.3_minModVal=0.025_redByVal=0.02_screenBorderPixels=12_frameInterpolation=linear.mp4"]
let list_of_embedded_weblink = ["weblink-cap-and-tony.png",  "weblink-rocky-steps-cropped.png", "weblink-harry-met-sally.png", "weblink-shawshank.png", "weblink-big-buck.png", "weblink-james-bond-macau-dark.png", "weblink-ff.png", "weblink-stranger-things.png"]
//let list_of_YouTubeLinks_short = ["K2-5H_u5gCc",  "46NwmCgm4lA", "OfP9YJvI1-o", "Abvshb4kEc0", "OnZnNcx2bW4", "c9KGwYiOo6c", "0fyKluGBD8Q", "T34B4n8GTOc"]
let list_of_YouTubeLinks = ["IhOfx_hSvWg",  "xGfurQ9vL4g", "CZwwXOxTOxQ", "QsltZwfy57E", "NfmDi44YOl4", "TJgYyGSNoac", "8uP2FVNZMJU", "HWqaaegr1QE"]

let screenWidth = window.screen.width * window.devicePixelRatio // send this to Python server for decoder processing; this is the 'width' of the screen
let screenHeight = window.screen.height * window.devicePixelRatio // send this to Python server for decoder processing; this is the 'height' of the screen

function startup() {
 
  // check screen FPS
  //calcFPS({count: 30})
 
  // hide the demo instructions on load
  const demoInstructions = document.getElementById("two");
  demoInstructions.style.display = "none";
  const demoVideoSection = document.getElementById("demoVideoSection");
  demoVideoSection.style.display = "none";

  // Get the reference to video
  const videoSection = document.getElementById("videoSection");
  const videoAndTextSection = document.getElementById("videoAndTextSection");
  videoAndTextSection.style.display = "none";
  const embeddedWebLinkAndTextSection = document.getElementById("embeddedWebLinkAndTextSection");
  embeddedWebLinkAndTextSection.style.display = "none";

  // On pressing ENTER call toggleFullScreen method
  const video = document.getElementById("video");  
  document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      toggleFullScreen(video);
    }
  }, false);
}

// we are given a toolKaiserID
// compute the ascii codes modulo 0
// return false if this is not 0
// currently we do not do a length check
var crCheck = function(toolKaiserID)  {

  if (toolKaiserID == null)
    return false;
  // convert the string into an array of characters
  let characters = toolKaiserID.split('');
  // sum up the corresponding ASCII codes
  let total = 0
  for (let i=0; i<characters.length; i++)
    total += characters[i].charCodeAt(0);

  if ((total % 26) == 0) {
      return true;
  }
  else {
      console.log("crCheck:=", total);
      return false;
  }

}

function showDemoVideo() {
  const demoVideoSection = document.getElementById("demoVideoSection"); 
  if(demoVideoSection.style.display == "none") {
    demoVideoSection.style.display = "block";
    const demoVideo = document.getElementById("demoVideo"); 
    demoVideo.style.display = "block";
    demoVideo.play();
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      console.log('On phone')
      demoVideo.requestFullscreen();
     }
    
  }
  else{
    demoVideoSection.style.display = "none";
  }

}

function showDemoInstructions() { 
  const demoInstructions = document.getElementById("two");  
  if(demoInstructions.style.display == "none") {
    demoInstructions.style.display = "block";
  }
  else{
    demoInstructions.style.display = "none";
  }
}

function playVideo() {    
  console.log("Inside playVideo:= ", numOfVideo)

  let potentialRevelioID;
  if (localStorage.getItem('RevelioID') == null)
    potentialRevelioID = window.prompt("Enter the 10 character revelio ID to view the videos.","");
  else{
    //potentialRevelioID = window.prompt("Revelio ID is " + localStorage.getItem('RevelioID') + " or enter a different ID.",localStorage.getItem('RevelioID'));    
    potentialRevelioID = localStorage.getItem('RevelioID');
    console.log('potentialRevelioID := ', potentialRevelioID)
  }
  
  // make sure that this is a valide code 
  while (crCheck(potentialRevelioID) == false) {
    potentialRevelioID = window.prompt("Enter a valid 10 character revelio ID to view the videos.","");
  }
  
  window.RevelioID = potentialRevelioID;
  localStorage.setItem('RevelioID', window.RevelioID);
  console.log('revelioID is:= ', localStorage.getItem('RevelioID'));

  const videoAndTextSection = document.getElementById("videoAndTextSection");
  videoAndTextSection.style.display = "block";
  const videoSection = document.getElementById("videoSection");
  const runVideoButton = document.getElementById("runVideoButton");
  videoSection.style.display = "block";
  const embeddedWebLinkAndTextSection = document.getElementById("embeddedWebLinkAndTextSection");
  embeddedWebLinkAndTextSection.style.display = "block";
  //document.getElementById("screenHeight").innerHTML = screenHeight;
  //document.getElementById("screenWidth").innerHTML = screenWidth;

  const video = document.getElementById("video");  
  const embeddedWeblink = document.getElementById("embeddedWeblink");
  
  //video.src = "assets/videos/" + list_of_videos[numOfVideo]
  video.src = "https://www.youtube.com/embed/" + list_of_YouTubeLinks[numOfVideo] + "?autoplay=1&mute=1&playlist=" + list_of_YouTubeLinks[numOfVideo] + "&loop=1&controls=0&showinfo=0";
  //video.src = "https://www.youtube.com/embed/" + list_of_YouTubeLinks[numOfVideo] + "?autoplay=1&mute=1&playlist=" + list_of_YouTubeLinks[numOfVideo] + "&rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1";
  //video.load()
  //video.play()
  
  embeddedWeblink.src = "images/" + list_of_embedded_weblink[numOfVideo]

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
  const videoSection = document.getElementById("videoSection");
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    //video.requestFullscreen();
    var requestFullScreen = videoSection.requestFullscreen || videoSection.webkitRequestFullscreen || videoSection.mozRequestFullScreen ||  videoSection.msRequestFullscreen;
    requestFullScreen.call(videoSection);
    //videoSection.requestFullscreen();
    video.style.padding = '40px';
    video.width = '100%';  
    video.height = '100%';    
    //videoPlayer.style.width = 'auto'
    //videoPlayer.style.height = '100%'

    // get  the video id
    let whichVideo
    if (numOfVideo > 0)
      whichVideo = numOfVideo - 1
    else 
      whichVideo = list_of_videos.length-1
    var nameOfVideo = list_of_videos[whichVideo].split('_')[1]
    console.log('video selected is:=', nameOfVideo)
    var colorSpaceAndChannel = list_of_videos[whichVideo].split('_')[2] + '_' + list_of_videos[whichVideo].split('_')[3] 
    console.log('video is encoded with modulation scheme:=', colorSpaceAndChannel)
    // send the video id and other info to heroku or localhost or Ivan's server
    $.ajax({
      type: "POST", 
      /* add for heroku
      url: "https://toolkaiser.herokuapp.com/api/sendImg", 
      add for heroku */
      // uncomment below to run on local server
      //url: "http://127.0.0.1:5000/api/uploadFile",  /* delete for heroku */                                 
      //url: "https://revelio2see.herokuapp.com/api/uploadFile", /* to send things to Heroku server */
      //headers: {  'Access-Control-Allow-Origin': '*' },
      url: " https://vitro.getexcalibur.com:8443/api/uploadFile",
      data: JSON.stringify({'task': "processWhatIsUserWatching", 'revelioID': window.RevelioID, 'nameOfVideo': nameOfVideo, 'colorSpaceAndChannel': colorSpaceAndChannel}),                    
      contentType: "application/json",
      dataType: "json",
      success: function(response) {
          console.log(response.comments)
      },
      error: function(response) {
        console.log('Arrgh!! Error in sending whatIsUserWatching.json!!!', response)
      }
      }).done(function() {
        console.log('In done for ajax. Nothing for now.')      
      }); 

  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
      video.width = '480';      
      video.height = '270';      
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

// check if the screen has 60Hz refresh rate
function calcFPS(opts){
  var requestFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame;
  if (!requestFrame) return true; // Check if "true" is returned; 
                                  // pick default FPS, show error, etc...
  function checker(){
      if (index--) requestFrame(checker);
      else {
          // var result = 3*Math.round(count*1000/3/(performance.now()-start));
          var result = count*1000/(performance.now()- start);
          if (typeof opts.callback === "function") opts.callback(result);
          console.log("Calculated: "+result+" frames per second");
          if (Math.round(result) <= 50) {
            alert('Your screen refresh rate is ' + Math.round(result) + "Hz. Encoded videos will not be perfectly displayed. Please use a screen with 60Hz refresh rate.")
          }
      }
  }
  if (!opts) opts = {};
  var count = opts.count||60, index = count, start = performance.now();
  checker();
}