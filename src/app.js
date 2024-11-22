import anime from './anime.es.js';

const delay = (time) => {
  return new Promise((resolve) => {
    return setTimeout( () => {
      resolve();
    }, time)
  })
};

var body = document.querySelector('body')
body.classList.add('blurred');
var mPlayer = document.querySelector('#m-player');

onload = async () => {
  body.classList.remove('blurred');
  body.classList.add('blur-in');
  await delay(1000);
  mPlayer.classList.remove('hidden');
  mPlayer.classList.add('blur-in');

}

var main = document.querySelector('main');
var about = document.querySelector('#about');
var darkMode = false;

const toggleDark = () => {
  if ((main.scrollTop >= about.offsetTop) && darkMode == false) {
    darkMode = true;
    document.documentElement.classList.add('dark');
  } else if ((main.scrollTop < about.offsetTop) && darkMode == true) {
    darkMode = false;
    document.documentElement.classList.remove('dark');
  }
}

//*
main.onscroll = () => {
  // console.log(main.scrollTop, about.offsetTop, services.offsetTop);
  toggleDark();
};

onresize = () => {
  // console.log(main.scrollTop, about.offsetTop, services.offsetTop);
  toggleDark();
};
//*/

var navButton = document.querySelector('#nav-button');
var aboutSection = document.querySelector('#nav-button');

// scroll 675 About

// onresize = (e) => {
//   console.log(window.innerWidth, window.innerHeight);
// }

// Music Player

// Music Player Hover

mPlayer.addEventListener('mouseover', function (e) {
  anime({
    targets: '#m-player',
    width: '20vw',
    duration: 1000,
    easing: 'easeOutExpo',
  });
});

mPlayer.addEventListener('mouseout', function (e) {
  anime({
    targets: '#m-player',
    width: '5vw',
    duration: 1000,
    easing: 'easeOutExpo',
  })
});

// Music Player Controls

var mAudio = document.querySelector('#m-audio');
var mControl = document.querySelector('#m-control');
var mLabel = document.querySelector('#m-label');
var mPing = document.querySelector('#m-ping');


['play', 'playing'].forEach( (e) => {
  mAudio.addEventListener(e, () => {
    mControl.style.transform = 'scale(1)';
    if (mControl.src.includes('play-icon')) {
      mControl.src = mControl.src.replace('play','pause');
      anime({
        targets: '#m-label, #dots',
        keyframes: [
          { opacity: 1},
          { opacity: 0},
        ],
        easing: 'linear',
        duration: 500,
        complete: () => {
          mLabel.innerHTML = 'Now Playing';
          anime({
            targets: '#m-label, #dots',
            keyframes: [
              { opacity: 0},
              { opacity: 1},
            ],
            easing: 'linear',
            duration: 500,
            complete: () => {
              if ([...mPing.classList].includes('animate-ping')) {
                mPing.classList.toggle('animate-ping');
                console.log('toggled');
              } else {
                mPing.classList.add('animate-ping');
                console.log('added');
              };
            }
          });
        }
      });
    };
  });
}); 

mAudio.volume = .25;
mAudio.play();

['keydown', 'mousedown', 'pointerdown', 'pointerup', 'touchend'].forEach( (event) => {
  document.body.addEventListener(event, (eventInner) => {  
    if (eventInner.target.id != 'm-control') {
      mAudio.volume = .25;
      mAudio.play();
    }    
  }, { once: true });
});

if (!mAudio.paused || mAudio.currentTime) {
  mControl.src = mControl.src.replace('play','pause');
  anime({
    targets: '#m-label, #dots',
    keyframes: [
      { opacity: 1},
      { opacity: 0},
    ],
    easing: 'linear',
    duration: 500,
    complete: () => {
      mLabel.innerHTML = 'Now Playing';
      anime({
        targets: '#m-label, #dots',
        keyframes: [
          { opacity: 0},
          { opacity: 1},
        ],
        easing: 'linear',
        duration: 500,
        complete: () => {
          if ([...mPing.classList].includes('animate-ping')) {
            mPing.classList.toggle('animate-ping');
            console.log('toggled');
          } else {
            mPing.classList.add('animate-ping');
            console.log('added');
          };
        }
      });
    }
  });
}

mControl.addEventListener('click', () => {
  if (mControl.src.includes('play-icon')) {
    mAudio.volume = .25;
    mAudio.play();    
  } else if (mControl.src.includes('pause-icon')) {
    mAudio.pause();
    mControl.src = mControl.src.replace('pause','play');
    mControl.style.transform = 'scale(1)';
    anime({
      targets: '#m-label, #dots',
      keyframes: [
        { opacity: 1},
        { opacity: 0},
      ],
      easing: 'linear',
      duration: 500,
      complete: () => {
        mLabel.innerHTML = 'Play Now';
        anime({
          targets: '#m-label, #dots',
          keyframes: [
            { opacity: 0},
            { opacity: 1},
          ],
          easing: 'linear',
          duration: 500,
          complete: () => {
            if ([...mPing.classList].includes('animate-ping')) {
              mPing.classList.toggle('animate-ping');
              console.log('toggled');
            } else {
              mPing.classList.add('animate-ping');
              console.log('added');
            };
          }
        });
      }
    });
  }
});

['mousedown', 'dragstart'].forEach( (e) => {
  mControl.addEventListener(e, () => {
    mControl.style.transform = 'scale(0.8)';
  });
});

['mouseup', 'dragend', 'drop'].forEach( (e) => {
  mControl.addEventListener(e, () => {
    mControl.style.transform = 'scale(1)';
  });
});

// Type Writer

const writerWords = ['Programmer', 'Tech VA', 'Developer']
var tWriter = document.querySelector('#tWriter');

const typeWriter = async () => {

  const tErase = async (w) => {
    for (var i in [...w]) {
      await delay(75);
      w = w.substring(0, w.length - 1);
      tWriter.innerHTML = w;
    };
  };

  const tType = async (w) => {
    let str = '';
    for (let i in [...w]) {
      await delay(100);
      str = w.substring(0, Number(i)+1);
      tWriter.innerHTML = str;
    }
  }

  for (let i in writerWords) {
    tErase(tWriter.innerHTML);
    await delay(1500);
    tType(writerWords[i]);
    await delay(1500);
             
  };
  typeWriter();
};

typeWriter();

// navButton.onclick = (function (e) {
//   anime({
//     targets: '.b2',
//     d: {

//       // M1440 289.666C1440 289.666 1090.9 540 693.257 540C295.612 540 0 289.666 0 289.666L693.257 540L1440 289.666Z

//       value: [ 'M1440,-0.00081h1440v22.695865L790.374676,31.90299c.048036.189341,0,66.648137-70.374676,66.648137v0v0c-69.774041,0-69.555301-66.462947-69.774041-540L1440,31.90299v 289.666Z' , 'M0,-0.00081h1440v22.695865L790.374676,31.90299c.048036.189341,0,66.648137-70.374676,66.648137v0v0c-69.774041,0-69.555301-66.462947-69.774041-66.648137L0,31.90299v-31.9038Z' ],
//       duration: 600,
//       easing: 'easeOutQuad',
//       loop: true,
//       direction: 'alternate'
//     },
//     offset: 0
//   });
//   anime({
//     targets: '.b1',
//     d: {
//       value: [,],
//       duration: 600,
//       easing: 'easeOutQuad'
//     },
//     offset: 0
//   })
// });
