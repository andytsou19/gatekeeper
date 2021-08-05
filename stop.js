function whyWatch(){
  
}


// window.location.replace("http://www.w3schools.com"); replaces current URL with whatever passed in

window.addEventListener('yt-page-data-updated', function () {
  let address = window.location.href;
  console.log('THIS IS THE FUCKING ADDRESS' + address + ' this is yt-page ');
  const check  = address.slice(0,11)
  console.log(check)
  if (address.includes('https://www.youtube.com/watch?v=') === true){
    console.log('wow')
    window.location.replace('https://youtu.be/9GTq9Zsif2A')
  }
  // https://www.youtube.com/watch?v=hbhoAr8GV98 
  // https://www.youtube.com/watch?v=
  // //setTimeout function 
});

































































































// let address = window.location.href;
// console.log('THIS IS THE FUCKING ADDRESS' + address);
  // use `url` here inside the callback because it's asynchronous!

// window.addEventListener('load', function () {
//   let address = window.location.href;
//   console.log('THIS IS THE FUCKING ADDRESS' + address + ' this is loaddddd');
// });


// chrome.tabs.query({active: true, currentWindow: true}, tabs => {
//   let url = tabs[0].url;
//   console.log(url)
//   // use `url` here inside the callback because it's asynchronous!
// });

// document.addEventListener('spfdone', function() {
//   let address = window.location.href;
// console.log('THIS IS THE FUCKING ADDRESS' + address);
//   // do stuff
// });



// chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//   console.log(tabs[0].url);
// });