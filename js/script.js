var cout = document.getElementById('count')
// console.log(cout.value)

function minus() {
    if (cout.value <= 0) {
        alert("Minimum Count limit Rechead");
    }
    else {
        cout.value -= 1;
    }
}
function reset() {
    cout.value = 0

}
function plus() {
    cout.value++
}
