function log_in() {
    un = document.getElementById('username')
    pw = document.getElementById('password')

    both_filled = true;

    if (un.value === '') {
        un.style = 'background-color: darksalmon;';
        both_filled = false;
    } else {
        un.style = '';
    }

    if (pw.value === '') {
        pw.style = 'background-color: darksalmon;';
        both_filled = false;
    } else {
        pw.style = '';
    }

    if (!both_filled) {
        return;
    }

    // hide the login box
    document.getElementById('login-box').classList.add('hidden');

    // show welcome screen
    document.getElementById('welcome-screen').classList.remove('hidden');

    // set timeout for gif
    window.setTimeout(gif_timeout, 2153);

}

function gif_timeout() {
    console.log('hit')
    document.getElementById('minecraft').src = 'images/minecraft_last.png';

    document.getElementById('minecraft').classList.add('fadeout');
}

function hide_welcome_screen() {
    document.getElementById('overlay').classList.add('hidden');
    // picture time
    document.getElementById('picture').classList.remove('hidden');
}

var spooky_intervals = []

function enable_spooky_picturee() {
    // enable spooky spnge
    spooky_intervals.push(window.setInterval(toggle_invert, 1000));

    b = document.getElementById('spooky-button')
    if (b.value == "Spooky Mode")
    {
        b.value = "More Spooky"
    } else if (b.value == "More Spooky") {
        b.value = "Even More Spooky"
    }
}

function disable_spooky_mode() {
    for (i = spooky_intervals.length - 1; i >= 0; i--) {
        window.clearInterval(spooky_intervals[i]);
    }
    spooky_intervals = []
    document.getElementById('picture').classList.remove('inverted');

    b = document.getElementById('spooky-button')
    b.value = "Spooky Mode"
}

// flashes spooky picturee bob
function toggle_invert() {
    document.getElementById('picture').classList.toggle('inverted');
}

pic_idx = 0;
available_pics = [
    'images/spongebob.jpg',
    'images/horse.jpg',
    'images/basketball.png',
    'images/tape_measure.jpg',
    'images/boss.jpg',
    'images/morgan_freeman.png',
    'images/crappie.jpg',
    'images/stars.png',
    'images/evil_queen.png',
    'images/bean.jpg',
    'images/garfield.jpg',
    'images/larry.jpg',
    'images/toilet.jpg',
    ];

function next_picture() {
    pic_idx = (pic_idx + 1) % available_pics.length;
    document.getElementById('pic').src = available_pics[pic_idx]
}
