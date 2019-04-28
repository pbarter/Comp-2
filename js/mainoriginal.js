/////////// DROPDOWN MENU ON NAV

//Get the class in the HTML
const dropdownButton = document.querySelector('.dropdown');
//Add an event where when clicked, the dropdown button will insert a class inside the div called is-active (which is used in Bulma's library to toggle a dropdown to open the list of links to other pages)
dropdownButton.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdownButton.classList.toggle('is-active');
});


const dashboardPage = document.getElementById('schedule');
const explorePage = document.getElementById('explore-contents');
const accountFollow = document.getElementById(`followingslist`);

//////////ARRAY OF CHANNELS
const channelList = [
  {id: 125, name:`Pewdiepie`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id: 126, name:`VeronicaBlogs`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id: 127, name:`Jerma985`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id: 128, name:`SidCooks`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id: 129, name:`fextralife`, img:`https://bulma.io/images/placeholders/128x128.png`},
  {id: 130, name:`Dopefish`, img:`https://bulma.io/images/placeholders/128x128.png`},
];

const scheduleList = [
  {id: 236, channelId: 125,  platform: 'Youtube', name: "Upload Scheduled", days:"wed", start:"h17", end:"h19", time:"5 P.M - 7 P.M"},
  {id: 238, channelId: 126,  platform: 'Youtube', name: "Upload Scheduled", days:"mon", start:"h10", end:"h12", time:"10 A.M - 12 A.M"},
  {id: 240, channelId: 128,  platform: 'Youtube', name: "Upload Scheduled", days:"thu", start:"h10", end:"h12", time:"10 A.M - 12 P.M"},
  {id: 239, channelId: 127,  platform: 'Twitch', name: "Stream Scheduled", days:"sun", start:"h22", end:"h03", time:"10 P.M - 3 A.M"},
  {id: 241, channelId: 129,  platform: 'Twitch', name: "Stream Scheduled", days:"fri", start:"h19", end:"h00", time:"7 P.M - 12 A.M"},
  {id: 242, channelId: 130,  platform: 'Twitch', name: "Stream Scheduled", days:"tue", start:"h15", end:"h20", time:"3 P.M - 8 P.M"},
];

// CHannel: User, ID
const channelsAr = [
  // {id: 123, name: "Gameguy"},
  // {id: 124, name: "Gamegal"},
];
// Schedule stream: id (schedule), channelID (to match with channelsAr ID), platform, event name, day, start time, end time, and time (displays on rectangles)
let streamsAr = [
  // {id: 234, channelId: 123,  platform: 'Youtube', name: "Upload Scheduled", days:"mon", start:"h07", end:"h09", time:"7 A.M - 9 A.M"},
  // {id: 235, channelId: 124,  platform: 'Twitch', name: "Streaming session", days:"tue", start:"h09", end:"h14", time:"9 A.M - 2 P.M"},

];

 if (dashboardPage) {
   /// Retrieving array string then convering back to array and telling JS forEach item in the array, push to their specified array
  const retrieveChannels = JSON.parse(localStorage.getItem(`saveChan`));
  retrieveChannels.forEach(function(content){
    channelsAr.push(content);
  });
  const retrieveStreams = JSON.parse(localStorage.getItem(`saveStr`));
  retrieveStreams.forEach(function(content){
    streamsAr.push(content);
  });

//DESKTOP VIEW GET SCHEDULE LIST


//// Gets channelAr and finds the id that is equal to streamId (which is all of them in this rule)

const findChannelFromId = (streamId) => {
  return channelsAr.find(tempChannel => tempChannel.id == streamId)
}

//// Same with this one
const findStreamFromChannelId = (channelId) => {
  return streamsAr.find(stream => stream.channelId == channelId)
}


const printSingleStream = (stream) => {
  // Finds which channel this stream belongs to
  let theChannel = findChannelFromId(stream.channelId);

  // Format a list item with the channel colour and the stream name
  return `<li class="event ${stream.platform}" style="grid-column:${stream.days}; grid-row:${stream.start} / ${stream.end};">
  <p>${theChannel.name}</p><br><p class="info">${stream.name}</p><br><p class="time">${stream.time}</p>
  <div class="mobilecont" data-id="${theChannel.id}"></div>
  </div>
  </li>`;
}
// Code to "join" each item in the array once we output
const printAllStreams = () => {
  return streamsAr.map( theStream => printSingleStream(theStream) ).join('');
  
}
// The final output to HTML
document.getElementById('schedule').innerHTML += printAllStreams();


// Mobile Display Box

/// The click function in which the rectangles in our schedule will insert a div display that will show us the channel name, the event (upload or stream scheduled), and the time.
dashboardPage.addEventListener(`click`, event => {
  console.log(event)
  let trigger = event.target.dataset.id;
  if (trigger) {
    let theChannel = findChannelFromId(trigger);
    let theStream = findStreamFromChannelId(parseInt(trigger));
    console.log('theStream', theStream);
    
    dashboardPage.innerHTML += `<div id="eventmobiledisplay" class="eventmobiledisplay" data-id="event-m-display"><div class="mobile-display"><p>${theChannel.name}</p><br><p>${theStream.name}</p><br><p>${theStream.time}</p></div>`
  }
});
// The function to remove the "eventmobiledisplay" div when you click around the black box
  window.addEventListener(`click`, (outside) => {
    if (outside.target.id == `eventmobiledisplay`) {
      outside.target.remove();
    }
  });
}

            

        

else if (explorePage) {

// I want to output a list of people to follow and the way to do that is similar to how we output the schedule items in the dashboard page
const findChannelInfoId = (streaminfoId) => {
  return channelList.find(tempChan => tempChan.id == streaminfoId)
}

const findStreamInfoId = (channelinfoId) => {
  return scheduleList.find(tempstr => tempstr.channelId == channelinfoId)
}

const printStream = (theStreamstuff) => {
let theChannelContent = findStreamInfoId(theStreamstuff.id);  
  return `<div class="columns mt-col">
  <div class="column is-one-quarter" id="no-pad">
      <figure class="image is-128">
          <img src="${theStreamstuff.img}">
      </figure>
  </div>
  <div class="column" id="pl">
      <h2 class="title is-6 has-text-white">${theChannelContent.platform}: ${theStreamstuff.name}</h2>
      <button class="button is-small ${theChannelContent.platform}" data-id="${theStreamstuff.id}">Follow</button>
  </div> 
</div>`;
}

const printAllChannelsEx = () => {
  return channelList.map( theStreamstuff => printStream(theStreamstuff) ).join('');
}

document.getElementById('explore-contents').innerHTML += printAllChannelsEx();

//Button that will once clicked, will push the specific stream and channel information to channelsAr and streamsAr
explorePage.addEventListener(`click`, event => {
  //console.log(event)
  let enabler = event.target.dataset.id;
  if (enabler) {
    console.log(`success`);
    let channelInfo = findChannelInfoId(enabler);
    channelsAr.push(channelInfo);
    console.log(channelsAr)

    let streamInfo = findStreamInfoId(enabler);
    streamsAr.push(streamInfo);
    console.log(streamsAr)
    alert(`Channel added! Please remember to save followers.`)

  }
});
//Save button which will save our pushed items and turn it to a string (which will be changed to an array then pushed to streamsAr and channelsAr when we call for it in our other pages)
const saveButton =  document.getElementById(`save`)
saveButton.addEventListener(`click`, event => {
  localStorage.setItem(`saveChan`, JSON.stringify(channelsAr));
  localStorage.setItem(`saveStr`, JSON.stringify(streamsAr));
  alert(`Followers saved! Check the schedule for stream/upload times.`)

});
  
}

else if (accountFollow) {

  const retrieveChannels = JSON.parse(localStorage.getItem(`saveChan`));
  retrieveChannels.forEach(function(content){
    channelsAr.push(content);
  });
  const retrieveStreams = JSON.parse(localStorage.getItem(`saveStr`));
  retrieveStreams.forEach(function(content){
    streamsAr.push(content);
  });

  const findChannelFromId = (streamId) => {
    return channelsAr.find(tempChannel => tempChannel.id == streamId)
  }
  // I called streamsAr.find for the purpose of the unfollow button. channelsAr and streamsAr will need to remove an item depending on what channel the user unfollows
  const findStreamFromChannelId = (channelId) => {
    return streamsAr.find(stream => stream.channelId == channelId)
  }
  
  const printSingleStream = (stream) => {
    let theChannel = findChannelFromId(stream.channelId);  
    let html =  `<div class="columns mt-col">
    <div class="column is-one-quarter" id="no-pad">
        <figure class="image is-128">
            <img src="${theChannel.img}">
        </figure>
    </div>
    <div class="column" id="pl">
        <h2 class="title is-6 has-text-white">${stream.platform}: ${theChannel.name}</h2>
        <button class="button is-small ${stream.platform} unfollow-button" data-id="${stream.id}">Unfollow</button>
    </div> 
  </div>`;
  return html;
  }
  
  // Janelle did her version of printAllStreams which is similar to what map does. I left it here for future reference since I have map, the for (let x=0) loop technique, and the forEach loop used in this assignment
  const printAllStreams = () => {
    // return streamsAr.map( theStream => printSingleStream(theStream) ).join('');

    let output = ""
    for (let i = 0; i < streamsAr.length; i++) {
      output += printSingleStream(streamsAr[i])
    }
    return output;

  }
  
  document.getElementById('followingslist').innerHTML += printAllStreams();

  //remove one follower on click (not active since I can't figure it out)
  
  /*
  accountFollow.addEventListener(`click`, event => {
  let enabler = event.target.dataset.id;
  if (enabler) {
    console.log(`success`);
    channelsAr.splice(findChannelFromId);
    console.log(channelsAr)

    streamsAr.splice(findStreamFromChannelId);
    console.log(streamsAr)
    alert(`Channel removed! Please remember to save follower list.`)

  }
});
// Added save follows as a way to resave the array after removing the one item in it. (wasn't sure how to add a save function in the evenlistener without overwriting each time)

  const saveButton =  document.getElementById(`save`)
saveButton.addEventListener(`click`, event => {
  localStorage.setItem(`saveChan`, JSON.stringify(channelsAr));
  localStorage.setItem(`saveStr`, JSON.stringify(streamsAr));
  alert(`Followers saved! Check the schedule for stream/upload times.`)

});
  */

  // remove all people from the list
  const nukeIt = document.getElementById(`removeall`);
  nukeIt.addEventListener(`click`, event => {
    localStorage.clear();
    alert(`Followers removed! Refreshing list now.`)
    location.reload();
  });


  



}





