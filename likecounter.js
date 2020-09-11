let likecounter = 0;
let dislikecounter = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#like').innerHTML = localStorage.getItem('likecounter');
    document.querySelector('#dislike').innerHTML = localStorage.getItem('dislikecounter');
    document.querySelector('.like').onclick = likecount;
    document.querySelector('.dislike').onclick = dislikecount;
});

function likecount() {
    let likecounter = localStorage.getItem('likecounter');
    likecounter++;
    document.querySelector('#like').innerHTML = likecounter;
    localStorage.setItem('likecounter', likecounter);
}

function dislikecount() {
    let dislikecounter = localStorage.getItem('dislikecounter');
    dislikecounter++;
    document.querySelector('#dislike').innerHTML = dislikecounter;
    localStorage.setItem('dislikecounter', dislikecounter);
}
