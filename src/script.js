
function fb_btn() {
    window.open("http://bit.ly/IEEE-UCI_Facebook", "_blank");

}

function discord_btn() {
    window.open("https://bit.ly/IEEE-UCI_Discord", "_blank");
}

function ig_btn() {
    window.open("https://bit.ly/IEEE-UCI_Instagram", "_blank");

}

function yt_btn() {
    window.open("https://bit.ly/IEEE-UCI_YouTube", "_blank");
}

function news_btn() {
    window.open("https://ieeeuci.us1.list-manage.com/subscribe/post?u=1db8428cfa01005b3e732b737&amp;id=bb8c036f5b", "_blank");
}

function github_btn() {
    window.open("https://github.com/ieee-uci", "_blank");
}

function resume_btn() {
    window.open("https://forms.gle/2uJJsi7ejGnF37USA", "_blank");
}

function ops_btn() {
    window.open("./ops.html", "_blank");
}

function ops_apply_btn() {
    window.open("https://forms.gle/MWch2AWkFiTdyf6v5", "_blank");
}


function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
        let offcanvas_id = everyelement.getAttribute('data-trigger');
        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);
        });
    });

    document.querySelectorAll('.btn-close').forEach(function (everybutton) {
        everybutton.addEventListener('click', function (e) {
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
    });

}); 