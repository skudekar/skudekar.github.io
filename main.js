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

function playVideo() {    
  console.log("Inside playVideo:= ", numOfVideo)

  let potentialRevelioID;
  if (localStorage.getItem('RevelioID') == null)
    potentialRevelioID = window.prompt("Enter the 10 character revelio ID to view the videos.","");
  else{
    potentialRevelioID = window.prompt("Revelio ID is " + localStorage.getItem('RevelioID') + " or enter a different ID.",localStorage.getItem('RevelioID'));
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

    // ge the video id
    let whichVideo
    if (numOfVideo > 0)
      whichVideo = numOfVideo - 1
    else 
      whichVideo = list_of_videos.length-1
    var nameOfVideo = list_of_videos[whichVideo].split('_')[1]
    console.log('video selected is:=', nameOfVideo)
    // send the video id and other info to heroku

    $.ajax({
      type: "POST", 
      /* add for heroku
      url: "https://toolkaiser.herokuapp.com/api/sendImg", 
      add for heroku */
      // uncomment below to run on local server
      //url: "http://127.0.0.1:5000/api/uploadFile",  /* delete for heroku */                                 
      url: "https://revelio2see.herokuapp.com/api/uploadFile", 
      data: JSON.stringify({'task': "processWhatIsUserWatching", 'revelioID': window.RevelioID, 'nameOfVideo': nameOfVideo}),                    
      contentType: "application/json",
      dataType: "json",
      success: function(response) {
          fileName = response.fileName;
          // give the user feedback which file is 
          // being processed since it can take a while
          let myMessage = document.getElementById('displayOutputMessageButton').value + "+ " + fileName + "\n";
          document.getElementById('displayOutputMessageButton').value = myMessage; 
          let newToolArray = processJPEGResponse(response, fileName, "addToLibrary");
          // add this tool to the personalToolLibrary.json            
          addNewToolToLibrary(response.fileName, response.toolboxNumber, newToolArray);

      },
      error: function(response) {
        console.log('Error in sending whatIsUserWatching.json!!!')
      }
      }).done(function() {
        console.log('In done for ajax. Nothing for now.')      
      }); 

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