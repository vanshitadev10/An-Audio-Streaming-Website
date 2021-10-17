// Audios

var aud1 = new Audio('Audios/aud1.mp3');
var aud2 = new Audio('Audios/aud2.mp3');
var aud3 = new Audio('Audios/aud3.mp3');
var aud4 = new Audio('Audios/aud4.mp3');
var aud5 = new Audio('Audios/aud5.mp3');
var aud6 = new Audio('Audios/aud6.mp3');
var aud7 = new Audio('Audios/aud7.mp3');
var aud8 = new Audio('Audios/aud8.mp3');
var aud9 = new Audio('Audios/aud9.mp3');
var aud10 = new Audio('Audios/aud10.mp3');
var aud11 = new Audio('Audios/aud11.mp3');
var aud12 = new Audio('Audios/aud12.mp3');
var aud13 = new Audio('Audios/aud13.mp3');
var aud14 = new Audio('Audios/aud14.mp3');
var aud15 = new Audio('Audios/aud15.mp3');




// Play And Favourite Buttons

const all_song = document.querySelector('.navigation').firstElementChild.firstElementChild;
const favourite = document.querySelector('.navigation').firstElementChild.lastElementChild;
const list = document.querySelector('.list');

const song = document.getElementsByClassName('song');

const line = document.querySelector('.line').offsetWidth;
const btn = document.getElementsByClassName('btn');
const pt = document.getElementsByClassName('point');
const li = document.getElementsByClassName('line');

const run = document.getElementsByClassName('run');


const fav = document.getElementsByClassName('fav');



all_song.addEventListener('click', () => {
    for (var i = 0; i < 15; i++) {
        song[i].style.display = 'grid';
    }
    all_song.classList.add('active');
    favourite.classList.remove('active');
})

favourite.addEventListener('click', () => {
    for (var i = 0; i < 15; i++) {
        song[i].style.display = 'none';
    }
    favourite.classList.add('active');
    all_song.classList.remove('active');
})



// Playing Of Song And Favourite Button

function pauseAll(num) {
    aud1.pause();
    aud2.pause();
    aud3.pause();
    aud4.pause();
    aud5.pause();
    aud6.pause();
    aud7.pause();
    aud8.pause();
    aud9.pause();
    aud10.pause();
    aud11.pause();
    aud12.pause();
    aud13.pause();
    aud14.pause();
    aud15.pause();

    for (var i = 0; i < 15; i++) {

        if (i != num) {

            btn[i].firstElementChild.src = 'Images/play.png';

            song[i].style.border = '2px solid rgb(145, 145, 145)';
            song[i].style.boxShadow = 'none';
        }
    }
}



function start(num1, num2, num3, num4, num5, num6) {

    player = setInterval(() => {

        if (num1.ended) {
            num2.firstElementChild.src = 'Images/play.png';
            num3.style.transform = `translateX(${0}px)`;
            num4.style.transform = `translateX(${0}px)`;
            num1.pause();
            wait();
            num5.style.border = '2px solid rgb(145, 145, 145)';
            num5.style.boxShadow = 'none';
        }

        else {
            var can = line / num1.duration;
            num3.style.transform = `translateX(${can * num1.currentTime}px)`;
            num4.style.transform = `translateX(${-can * num1.currentTime}px)`;
        }

    }, num1.duration);
}


function wait() {
    clearInterval(player);
}


function running(num1, num2, num3) {

    stan = setInterval(() => {


        var p = 0;
        var q = parseInt((Math.ceil(num2.currentTime)) / 60);
        var r = parseInt((Math.ceil(num2.currentTime)) / 10);
        var s = (Math.ceil(num2.currentTime)) % 10;

        if (r >= 6 && r < 12) {
            r -= 6;
        }
        else if (r >= 12 && r < 18) {
            r -= 12;
        }
        else if (r >= 18 && r < 24) {
            r -= 18;
        }


        if (num2.ended) {
            run[num1].textContent = `00:00`;
            num3.style.border = '2px solid rgb(145, 145, 145)';
            num3.style.boxShadow = 'none';
        }
        else {
            run[num1].textContent = `${p}${q}:${r}${s}`;
        }

    }, 1000);
}






function favor(num1, num2) {
    if (num1.firstElementChild.getAttribute('src').length == 16) {
        num1.firstElementChild.src = 'Images/heart_fav.png';

        favourite.addEventListener('click', () => {
            num2.style.display = 'grid';
            favourite.classList.add('active');
            all_song.classList.remove('active');
        })
    }

    else if (num1.firstElementChild.getAttribute('src').length == 20) {
        num1.firstElementChild.src = 'Images/heart.png';

        favourite.addEventListener('click', () => {
            num2.style.display = 'none';
            favourite.classList.add('active');
            all_song.classList.remove('active');
        })
    }

}




btn[0].addEventListener('click', () => {

    pauseAll(0);


    if (btn[0].firstElementChild.getAttribute('src').length == 15) {
        btn[0].firstElementChild.src = 'Images/pause.png';

        aud1.play();
        start(aud1, btn[0], pt[0], li[0], song[0], 0);
        running(0, aud1, song[0]);
        song[0].style.border = '2px solid black';
        song[0].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[0].firstElementChild.getAttribute('src').length == 16) {
        btn[0].firstElementChild.src = 'Images/play.png';
        aud1.pause();
        wait();
        song[0].style.border = '2px solid rgb(145, 145, 145)';
        song[0].style.boxShadow = 'none';
    }
})


fav[0].addEventListener('click', () => {
    favor(fav[0], song[0]);
})





btn[1].addEventListener('click', () => {

    pauseAll(1);

    if (btn[1].firstElementChild.getAttribute('src').length == 15) {
        btn[1].firstElementChild.src = 'Images/pause.png';

        aud2.play();
        start(aud2, btn[1], pt[1], li[1], song[1]);
        running(1, aud2, song[1]);
        song[1].style.border = '2px solid black';
        song[1].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[1].firstElementChild.getAttribute('src').length == 16) {
        btn[1].firstElementChild.src = 'Images/play.png';
        aud2.pause();
        wait();
        song[1].style.border = '2px solid rgb(145, 145, 145)';
        song[1].style.boxShadow = 'none';
    }
})


fav[1].addEventListener('click', () => {
    favor(fav[1], song[1]);
})





btn[2].addEventListener('click', () => {

    pauseAll(2);

    if (btn[2].firstElementChild.getAttribute('src').length == 15) {
        btn[2].firstElementChild.src = 'Images/pause.png';

        aud3.play();
        start(aud3, btn[2], pt[2], li[2], song[2]);
        running(2, aud3, song[2]);
        song[2].style.border = '2px solid black';
        song[2].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[2].firstElementChild.getAttribute('src').length == 16) {
        btn[2].firstElementChild.src = 'Images/play.png';
        aud3.pause();
        wait();
        song[2].style.border = '2px solid rgb(145, 145, 145)';
        song[2].style.boxShadow = 'none';
    }
})


fav[2].addEventListener('click', () => {
    favor(fav[2], song[2]);
})





btn[3].addEventListener('click', () => {

    pauseAll(3);

    if (btn[3].firstElementChild.getAttribute('src').length == 15) {
        btn[3].firstElementChild.src = 'Images/pause.png';

        aud4.play();
        start(aud4, btn[3], pt[3], li[3], song[3]);
        running(3, aud4, song[3]);
        song[3].style.border = '2px solid black';
        song[3].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[3].firstElementChild.getAttribute('src').length == 16) {
        btn[3].firstElementChild.src = 'Images/play.png';
        aud4.pause();
        wait();
        song[3].style.border = '2px solid rgb(145, 145, 145)';
        song[3].style.boxShadow = 'none';
    }
})


fav[3].addEventListener('click', () => {
    favor(fav[3], song[3]);
})





btn[4].addEventListener('click', () => {

    pauseAll(4);

    if (btn[4].firstElementChild.getAttribute('src').length == 15) {
        btn[4].firstElementChild.src = 'Images/pause.png';
        aud5.play();
        start(aud5, btn[4], pt[4], li[4], song[4]);
        running(4, aud5, song[4]);
        song[4].style.border = '2px solid black';
        song[4].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[4].firstElementChild.getAttribute('src').length == 16) {
        btn[4].firstElementChild.src = 'Images/play.png';
        aud5.pause();
        wait();
        song[4].style.border = '2px solid rgb(145, 145, 145)';
        song[4].style.boxShadow = 'none';
    }
})

fav[4].addEventListener('click', () => {
    favor(fav[4], song[4]);
})





btn[5].addEventListener('click', () => {

    pauseAll(5);

    if (btn[5].firstElementChild.getAttribute('src').length == 15) {
        btn[5].firstElementChild.src = 'Images/pause.png';
        aud6.play();
        start(aud6, btn[5], pt[5], li[5], song[5]);
        running(5, aud6, song[5]);
        song[5].style.border = '2px solid black';
        song[5].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[5].firstElementChild.getAttribute('src').length == 16) {
        btn[5].firstElementChild.src = 'Images/play.png';
        aud6.pause();
        wait();
        song[5].style.border = '2px solid rgb(145, 145, 145)';
        song[5].style.boxShadow = 'none';
    }
})

fav[5].addEventListener('click', () => {
    favor(fav[5], song[5]);
})





btn[6].addEventListener('click', () => {

    pauseAll(6);

    if (btn[6].firstElementChild.getAttribute('src').length == 15) {
        btn[6].firstElementChild.src = 'Images/pause.png';
        aud7.play();
        start(aud7, btn[6], pt[6], li[6], song[6]);
        running(6, aud7, song[6]);
        song[6].style.border = '2px solid black';
        song[6].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[6].firstElementChild.getAttribute('src').length == 16) {
        btn[6].firstElementChild.src = 'Images/play.png';
        aud7.pause();
        wait();
        song[6].style.border = '2px solid rgb(145, 145, 145)';
        song[6].style.boxShadow = 'none';
    }
})

fav[6].addEventListener('click', () => {
    favor(fav[6], song[6]);
})





btn[7].addEventListener('click', () => {

    pauseAll(7);

    if (btn[7].firstElementChild.getAttribute('src').length == 15) {
        btn[7].firstElementChild.src = 'Images/pause.png';
        aud8.play();
        start(aud8, btn[7], pt[7], li[7], song[7]);
        running(7, aud8, song[7]);
        song[7].style.border = '2px solid black';
        song[7].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[7].firstElementChild.getAttribute('src').length == 16) {
        btn[7].firstElementChild.src = 'Images/play.png';
        aud8.pause();
        wait();
        song[7].style.border = '2px solid rgb(145, 145, 145)';
        song[7].style.boxShadow = 'none';
    }
})


fav[7].addEventListener('click', () => {
    favor(fav[7], song[7]);
})



btn[8].addEventListener('click', () => {

    pauseAll(8);

    if (btn[8].firstElementChild.getAttribute('src').length == 15) {
        btn[8].firstElementChild.src = 'Images/pause.png';
        aud9.play();
        start(aud9, btn[8], pt[8], li[8], song[8]);
        running(8, aud9, song[8]);
        song[8].style.border = '2px solid black';
        song[8].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[8].firstElementChild.getAttribute('src').length == 16) {
        btn[8].firstElementChild.src = 'Images/play.png';
        aud9.pause();
        wait();
        song[8].style.border = '2px solid rgb(145, 145, 145)';
        song[8].style.boxShadow = 'none';
    }
})


fav[8].addEventListener('click', () => {
    favor(fav[8], song[8]);
})




btn[9].addEventListener('click', () => {

    pauseAll(9);

    if (btn[9].firstElementChild.getAttribute('src').length == 15) {
        btn[9].firstElementChild.src = 'Images/pause.png';
        aud10.play();
        start(aud10, btn[9], pt[9], li[9], song[9]);
        running(9, aud10, song[9]);
        song[9].style.border = '2px solid black';
        song[9].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[9].firstElementChild.getAttribute('src').length == 16) {
        btn[9].firstElementChild.src = 'Images/play.png';
        aud10.pause();
        wait();
        song[9].style.border = '2px solid rgb(145, 145, 145)';
        song[9].style.boxShadow = 'none';
    }
})


fav[9].addEventListener('click', () => {
    favor(fav[9], song[9]);
})





btn[10].addEventListener('click', () => {

    pauseAll(10);

    if (btn[10].firstElementChild.getAttribute('src').length == 15) {
        btn[10].firstElementChild.src = 'Images/pause.png';
        aud11.play();
        start(aud11, btn[10], pt[10], li[10], song[10]);
        running(10, aud11, song[10]);
        song[10].style.border = '2px solid black';
        song[10].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[10].firstElementChild.getAttribute('src').length == 16) {
        btn[10].firstElementChild.src = 'Images/play.png';
        aud11.pause();
        wait();
        song[10].style.border = '2px solid rgb(145, 145, 145)';
        song[10].style.boxShadow = 'none';
    }
})


fav[10].addEventListener('click', () => {
    favor(fav[10], song[10]);
})





btn[11].addEventListener('click', () => {

    pauseAll(11);

    if (btn[11].firstElementChild.getAttribute('src').length == 15) {
        btn[11].firstElementChild.src = 'Images/pause.png';
        aud12.play();
        start(aud12, btn[11], pt[11], li[11], song[11]);
        running(11, aud12, song[11]);
        song[11].style.border = '2px solid black';
        song[11].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[11].firstElementChild.getAttribute('src').length == 16) {
        btn[11].firstElementChild.src = 'Images/play.png';
        aud12.pause();
        wait();
        song[11].style.border = '2px solid rgb(145, 145, 145)';
        song[11].style.boxShadow = 'none';
    }
})


fav[11].addEventListener('click', () => {
    favor(fav[11], song[11]);
})





btn[12].addEventListener('click', () => {

    pauseAll(12);

    if (btn[12].firstElementChild.getAttribute('src').length == 15) {
        btn[12].firstElementChild.src = 'Images/pause.png';
        aud13.play();
        start(aud13, btn[12], pt[12], li[12], song[12]);
        running(12, aud13, song[12]);
        song[12].style.border = '2px solid black';
        song[12].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[12].firstElementChild.getAttribute('src').length == 16) {
        btn[12].firstElementChild.src = 'Images/play.png';
        aud13.pause();
        wait();
        song[12].style.border = '2px solid rgb(145, 145, 145)';
        song[12].style.boxShadow = 'none';
    }
})


fav[12].addEventListener('click', () => {
    favor(fav[12], song[12]);
})





btn[13].addEventListener('click', () => {

    pauseAll(13);

    if (btn[13].firstElementChild.getAttribute('src').length == 15) {
        btn[13].firstElementChild.src = 'Images/pause.png';
        aud14.play();
        start(aud14, btn[13], pt[13], li[13], song[13]);
        running(13, aud14, song[13]);
        song[13].style.border = '2px solid black';
        song[13].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[13].firstElementChild.getAttribute('src').length == 16) {
        btn[13].firstElementChild.src = 'Images/play.png';
        aud14.pause();
        wait();
        song[13].style.border = '2px solid rgb(145, 145, 145)';
        song[13].style.boxShadow = 'none';
    }
})


fav[13].addEventListener('click', () => {
    favor(fav[13], song[13]);
})





btn[14].addEventListener('click', () => {

    pauseAll(14);

    if (btn[14].firstElementChild.getAttribute('src').length == 15) {
        btn[14].firstElementChild.src = 'Images/pause.png';
        aud15.play();
        start(aud15, btn[14], pt[14], li[14], song[14]);
        running(14, aud15, song[14]);
        song[14].style.border = '2px solid black';
        song[14].style.boxShadow = '4px 4px 5px rgb(124, 124, 124)';
    }

    else if (btn[14].firstElementChild.getAttribute('src').length == 16) {
        btn[14].firstElementChild.src = 'Images/play.png';
        aud15.pause();
        wait();
        song[14].style.border = '2px solid rgb(145, 145, 145)';
        song[14].style.boxShadow = 'none';
    }
})


fav[14].addEventListener('click', () => {
    favor(fav[14], song[14]);
})