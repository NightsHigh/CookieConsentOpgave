
const overlay = document.getElementById('overlay');
const cookieBanner = document.getElementById('cookieBanner');
const acceptButton = document.getElementById('acceptButton');
const declineButton = document.getElementById('declineButton');
const box = document.getElementById('box');
const AllBtn = document.getElementById('All')
const PromotionalBtn = document.getElementById('Promotional')
const NeededBtn = document.getElementById('Needed')


// Handle Accept button click
acceptButton.addEventListener('click', function (event) {
  event.preventDefault()
  if (!AllBtn.checked && !PromotionalBtn.checked && !NeededBtn.checked){
    Redirect()
  } else{
    event.stopPropagation();
    console.log(`Accepted`)
    cookieBanner.classList.add('hidden');
    overlay.classList.add('hidden');
    box.classList.remove('hidden'); 
    box.classList.add('visible');
  }
});

// Handle Decline button click
declineButton.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('Declined cookies')
  Redirect()
});

// Change box color on click
const colors = ["red", "blue", "green", "purple", "orange"];
let currentIndex = 0;
box.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % colors.length;
  box.style.backgroundColor = colors[currentIndex];
});


function Redirect(){
  window.location.href = 'https://en.wikipedia.org/wiki/Cookie_Monster'; 
}
