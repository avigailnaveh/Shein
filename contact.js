function submitclick(event) {
    event.preventDefault(); 
    alert("Your request has been sent");

    const form = event.target;
    form.reset();
    goback();
}

function goback() {
    location.assign('index.html');
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".support-form form");
    form.addEventListener("submit", submitclick);
});
