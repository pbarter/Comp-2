/////////// DROPDOWN MENU

const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

////////// SCHEDULE CONTENTS

// CHannel User, ID, and platform(colour)
const channelsAr = [
  {id: 123, name: "Gameguy", platform: 'yt'},
  {id: 124, name: "Gamegal", platform: 'twitch'},
];
// Schedule stream id (schedule), id (channel), event name
const streamsAr = [
  {id: 234, channelId: 123, name: "Playing whateve game", days:"mon", start:"h07", end:"h09"},
  
];

//Find the id from channelsAr and match with the channelId from streamsAr
const findChannelFromId = (streamId) => {
  return channelsAr.find(tempChannel => tempChannel.id == streamId)
}


const printSingleStream = (theStream) => {
  // First find which channel this stream belongs to (so we know which colour it is)
  let theChannel = findChannelFromId(theStream.channelId);  // Note: If no colour, then we have a problem!

  // Format a list item with the channel colour and the stream name
  return `<li class="event ${theChannel.platform}" style="grid-column:${theStream.days}; grid-row:${theStream.start} / ${theStream.end}; "><p>${theChannel.name}</p><p>${theStream.name}</p></li>`;
}

const printAllStreams = () => {
  return streamsAr.map( theStream => printSingleStream(theStream) ).join('');
}

document.getElementById('schedule').innerHTML = printAllStreams();
  