function toggle() {
    var a = document.getElementById("style");
    a.x = 'dark' == a.x ? 'light' : 'dark'; // short if
    a.href = 'assets/' + a.x + '-style.css';
}