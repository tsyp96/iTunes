import radioPlayerInit from './radioPlayer.js';
import videoPlayerInit from './videoPlayer.js';
import audioPlayerInit from './audioPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach((item) => item.classList.remove('active'));
  playerBlock.forEach((item) => item.classList.remove('active'));

  audioPlayerInit.stop();
  videoPlayerInit.stop();
  radioPlayerInit.stop();
};

playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
  });
});

videoPlayerInit();
audioPlayerInit();
radioPlayerInit();
