function init_audio() {
  var table = {
    122: 1,
    115: 2,
    120: 3,
    100: 4,
    99: 5,
    118: 6,
    103: 7,
    98: 8,
    104: 9,
    110: 10,
    106: 11,
    109: 12,
    44: 13,
  };
  $(document).keypress(function(e) {
    console.log(e.keyCode);
    var n = table[e.keyCode];
    if (n) playNote(n);
  });
}

function playNote(n) {
  player = new Audio("meow" + n + ".wav");
  player.play();
  player.addEventListener('canplaythrough', function(e) { console.log(player.networkState); player.play(); });
}

init_audio();