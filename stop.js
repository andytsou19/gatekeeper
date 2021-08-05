//<yt-formatted-string force-default-style="" class="style-scope ytd-video-primary-info-renderer">ORIGINAL - COFFIN DANCING MEME  - Ghana's dancing pallbearers</yt-formatted-string>
// window.location.replace("http://www.w3schools.com"); replaces current URL with whatever passed in
window.addEventListener('yt-page-data-updated', function () {
  let address = window.location.href;
  console.log('THIS IS THE FUCKING ADDRESS' + address + ' this is yt-page ');
  if (address.includes('https://www.youtube.com/watch?v=') === true  && beats.includes(address) === false){
    console.log(beats.includes(address)) 
    const title = document.querySelector('.style-scope .ytd-video-primary-info-renderer')
    const body = document.querySelector('body')
    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal')
    const modalStuff = document.createElement('div')
    modalStuff.setAttribute('class', 'modal-content')
    const talk = document.createElement('h1')
    talk.innerText ="LOLLOLOLOLOLOLOLOLOLOL ROFL ROFL You're seriously watching " + document.title + " ?\n\n🤣🤣🤣🤣🤣 Really?🤣🤣🤣🤣🤣🤣🤣🤣🤣  \n\nI'm not trying to be mean but.... \n\n c'mon you can do better...\n\n🤣🤣🤣🤣🤣Here, watch this.. you'll thank me later"
    
    modal.style.cssText = `
    position: absolute;
    left: 500px;
    top: 500px;
    width: 1000px;
    height: 1000px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;`;
  
    modalStuff.style.cssText = `position: absolute;
    top: 55%;
    left: 40%;
    width: 1200px;
    height: 800px;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    z-index:2000`
    

    talk.style.cssText = `
    font-size: 45px;
    font-weight: bold;
    `
    modalStuff.appendChild(talk)
    modal.appendChild(modalStuff)
    body.appendChild(modalStuff)
    setTimeout(function(){ window.location.replace(selector()); }, 7500);
  }

});


const beats = ['https://www.youtube.com/watch?v=9GTq9Zsif2Am', 'https://www.youtube.com/watch?v=fs6FgBec-nk', 'https://www.youtube.com/watch?v=9BIYV3BLcno', 'https://www.youtube.com/watch?v=rO3uFWhpD9E', 'https://www.youtube.com/watch?v=KVeXQb_ouTk', 'https://www.youtube.com/watch?v=CRHyBwNtkLA', 'https://www.youtube.com/watch?v=AJjBO08N2_k', 'https://www.youtube.com/watch?v=9Bku7gXlkoo',  'https://www.youtube.com/watch?v=Ll-lia-FEIY', 'https://www.youtube.com/watch?v=D7aYjRl_6Zw&t=538s', 'https://www.youtube.com/watch?v=87M5NJfWx7c', 'https://www.youtube.com/watch?v=aLPVphRDEgU', 'https://www.youtube.com/watch?v=JWOOQUXNnR0', 'https://www.youtube.com/watch?v=lPd2A1DbG2s'];

function selector() {
  // goal to return a random element from array of links
  const selection = Math.floor(Math.random() * beats.length);
  return beats[selection];
  
}

//https://www.youtube.com/watch?v=lPd2A1DbG2s































































































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