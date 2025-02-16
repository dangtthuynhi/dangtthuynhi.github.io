/*Author    : Wafa Rifqi Anafin*/
/*Github    : https://github.com/wafarifki*/
/*Facebook  : https://facebook.com/wafarifkianafin*/
/*Instagram : https://instagram.com/wafarifki_*/
/*Website   : https://wafarifki.tk*/

var pages = new Array('halaman1', 'halaman2', 'halaman3', 'halaman4');

function klikMenu() {
  document.getElementsByClassName('dalemnya_kontener')[0].classList.toggle('buka_menu');
}

function PindahKeHalaman(page) {
  var dalemnya_kontener = document.getElementsByClassName('dalemnya_kontener')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  dalemnya_kontener.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2');
  dalemnya_kontener.classList.add('page-' + pages[page]);
}


;(function () {
  'use strict'

  const first_day = '2024-09-28 00:00';

  function parse(date) {
    const sum = new Date() - Date.parse(date);
    const seconds = Math.floor((sum / 1000) % 60),
      minutes = Math.floor((sum / 1000 / 60) % 60),
      hours = Math.floor((sum / (1000 * 60 * 60)) % 24),
      days = Math.floor(sum / (1000 * 60 * 60 * 24));

    return [days, hours, minutes, seconds];
  }

  function run(date) {
    const doms = document.getElementsByClassName('time');

    function tick() {
      const t = parse(date);

      for (let i = 0; i < doms.length; i++) {
        if (i === 0) {
          doms[i].innerText = t[i];
          continue;
        }
        doms[i].innerText = ('0' + t[i]).slice(-2);
      }
    }

    setInterval(tick, 1000);
  }

  run(first_day);
}())