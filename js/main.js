/////////// DROPDOWN MENU ON NAV

const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});


const dashboardPage = document.getElementById('schedule');
const explorePage = document.getElementById('explore-contents');

//////////ARRAY OF CHANNELS

const channelList = [
  {id:125, name:`Pewdiepie`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id:126, name:`VeronicaBlogs`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id:127, name:`Jerma985`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id:128, name:`SidCooks`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id:129, name:`fextralife`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id:130, name:`Dopefish`, img:`https://bulma.io/images/placeholders/128x128.png`},
];

const scheduleList = [
  {id: 236, channelId: 125,  platform: 'yt', name: "Upload Scheduled", days:"wed", start:"h17", end:"h19", time:"5 P.M - 7 P.M"},
  {id: 238, channelId: 126,  platform: 'yt', name: "Upload Scheduled", days:"mon", start:"h10", end:"h12", time:"10 A.M - 12 A.M"},
  {id: 240, channelId: 128,  platform: 'yt', name: "Upload Scheduled", days:"thu", start:"h10", end:"h12", time:"10 A.M - 12 P.M"},
  {id: 237, channelId: 125,  platform: 'twitch', name: "Stream Scheduled", days:"sat", start:"h07", end:"h21", time:"5 P.M - 9 P.M"},
  {id: 239, channelId: 127,  platform: 'twitch', name: "Stream Scheduled", days:"sun", start:"h22", end:"h03", time:"10 P.M - 3 A.M"},
  {id: 241, channelId: 129,  platform: 'twitch', name: "Stream Scheduled", days:"fri", start:"h19", end:"h00", time:"7 P.M - 12 A.M"},
  {id: 242, channelId: 130,  platform: 'twitch', name: "Stream Scheduled", days:"tue", start:"h15", end:"h20", time:"3 P.M - 8 P.M"},
];


// CHannel User, ID, and platform(colour)
const channelsAr = [
  {id: 123, name: "Gameguy"},
  {id: 124, name: "Gamegal"},
];
// Schedule stream id (schedule), id (channel), event name
const streamsAr = [
  {id: 234, channelId: 123,  platform: 'yt', name: "Upload Scheduled", days:"mon", start:"h07", end:"h09", time:"7 A.M - 9 A.M"},
  {id: 235, channelId: 124,  platform: 'twitch', name: "Streaming session", days:"tue", start:"h09", end:"h14", time:"9 A.M - 2 P.M"},

];

 if (dashboardPage) {

 
////////// SCHEDULE CONTENTS FOR DASHBOARD


//DESKTOP VIEW GET SCHEDULE LIST


//Find the id from channelsAr and match with the channelId from streamsAr
const findChannelFromId = (streamId) => {
  return channelsAr.find(tempChannel => tempChannel.id == streamId)
}


const printSingleStream = (theStream) => {
  // First find which channel this stream belongs to (so we know which colour it is)
  let theChannel = findChannelFromId(theStream.channelId);  // Note: If no colour, then we have a problem!

  // Format a list item with the channel colour and the stream name
  return `<li class="event ${theStream.platform}" style="grid-column:${theStream.days}; grid-row:${theStream.start} / ${theStream.end};">
  <p>${theChannel.name}</p><br><p class="info">${theStream.name}</p><br><p class="time">${theStream.time}</p>
  <div class="event-mobile"></div>
  <div class="event-mobile-display"><div class="mobile-display"><p>${theChannel.name}</p><br><p>${theStream.name}</p><br><p>${theStream.time}</p></div>
  </div>
  </li>`;
}

const printAllStreams = () => {
  return streamsAr.map( theStream => printSingleStream(theStream) ).join('');
}

document.getElementById('schedule').innerHTML += printAllStreams();






// MOBILE GET LIST

const mobileDisplay = document.getElementsByClassName("event-mobile-display");
  for(var x=0; x < mobileDisplay.length; x++){
    console.log(mobileDisplay[x].innerHTML)
  }
// const mobileClick = document.getElementsByClassName(`btn`);

// mobileClick.onclick = () => {
//   mobileDisplay.style.display = `block`;
// }

// window.onclick = (outside) => {
//  if (outside.target == mobileDisplay) {
//    mobileDisplay.style.display = `none`;
//  }
// }

// console.log(mobileDisplay.length)
// console.log(mobileClick.length)


const mobileClick = document.getElementsByClassName("event-mobile");
        for(var x=0; x < mobileClick.length; x++)
        {
            mobileClick[x].onclick = () => {
              mobileDisplay[x].style.display = "block";
            }
        }

        window.onclick = (outside) => {
          if (outside.target == mobileDisplay) {
            mobileDisplay.style.display = "none";
          }
        }
}

else if (explorePage) {
/////////// EXPLORE SECTION 

////Print list
const findChannelInfoId = (streaminfoId) => {
  return channelList.find(tempChan => tempChan.id == streaminfoId)
}

const printStream = (theStreamstuff) => {
let theChannelContent = findChannelInfoId(theStreamstuff.channelId);  
  return `<div class="columns mt-col">
  <div class="column is-one-quarter" id="no-pad">
      <figure class="image is-128">
          <img src="${theChannelContent.img}">
      </figure>
  </div>
  <div class="column" id="pl">
      <h2 class="title is-6 yt has-text-white">Youtube/Twitch Channel: ${theChannelContent.name}</h2>
      <button class="button is-small" id="is-ff0000" onclick="follow">Follow</button>
  </div> 
</div>`;
}

const printAllChannelsEx = () => {
  return scheduleList.map( theStreamstuff => printStream(theStreamstuff) ).join('');
}

document.getElementById('explore-contents').innerHTML += printAllChannelsEx();

////Save list to local

}
