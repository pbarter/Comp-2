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
  {id: 234, channelId: 123, name: "Streaming session", days:"mon", start:"h07", end:"h12", time:"7 A.M - 12 P.M"},
  
];

//Find the id from channelsAr and match with the channelId from streamsAr
const findChannelFromId = (streamId) => {
  return channelsAr.find(tempChannel => tempChannel.id == streamId)
}


const printSingleStream = (theStream) => {
  // First find which channel this stream belongs to (so we know which colour it is)
  let theChannel = findChannelFromId(theStream.channelId);  // Note: If no colour, then we have a problem!

  // Format a list item with the channel colour and the stream name
  return `<li class="event ${theChannel.platform}" style="grid-column:${theStream.days}; grid-row:${theStream.start} / ${theStream.end};">
  <p>${theChannel.name}</p><br><p>${theStream.name}</p><br><p>${theStream.time}</p>
  <div class="event-mobile" id="btn"></div>
  <div class="event-mobile-display" id="mobile-d"><div class="mobile-display"><p>${theChannel.name}</p><br><p>${theStream.name}</p><br><p>${theStream.time}</p></div>
  </div>
  </li>`;
}

//DESKTOP VIEW GET SCHEDULE LIST
const printAllStreams = () => {
  return streamsAr.map( theStream => printSingleStream(theStream) ).join('');
}

document.getElementById('schedule').innerHTML = printAllStreams() +`
<li class="day sun">Sun</li>
<li class="day mon">Mon</li>
<li class="day tue">Tue</li>
<li class="day wed">Wed</li>
<li class="day thu">Thu</li>
<li class="day fri">Fri</li>
<li class="day sat">Sat</li>

<li class="time h00">12:00 am</li>
<li class="time h01">1:00 am</li>
<li class="time h02">2:00 am</li>
<li class="time h03">3:00 am</li>
<li class="time h04">4:00 am</li>
<li class="time h05">5:00 am</li>
<li class="time h06">6:00 am</li>
<li class="time h07">7:00 am</li>
<li class="time h08">8:00 am</li>
<li class="time h09">9:00 am</li>
<li class="time h10">10:00 am</li>
<li class="time h11">11:00 am</li>
<li class="time h12">12:00 pm</li>
<li class="time h13">1:00 pm</li>
<li class="time h14">2:00 pm</li>
<li class="time h15">3:00 pm</li>
<li class="time h16">4:00 pm</li>
<li class="time h17">5:00 pm</li>
<li class="time h18">6:00 pm</li>
<li class="time h19">7:00 pm</li>
<li class="time h20">8:00 pm</li>
<li class="time h21">9:00 pm</li>
<li class="time h22">10:00 pm</li>
<li class="time h23">11:00 pm</li>

<li class="corner"></li>

<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>`;

// MOBILE GET LIST
const mobileDisplay = document.getElementById(`mobile-d`);
const mobileClick = document.getElementById(`btn`);

mobileClick.onclick = () => {
  mobileDisplay.style.display = `block`;
}

window.onclick = (outside) => {
 if (outside.target == mobileDisplay) {
   mobileDisplay.style.display = `none`;
 }
}