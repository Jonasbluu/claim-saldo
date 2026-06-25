const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

});

document.querySelector(".claim-btn")
.addEventListener("click", () => {

    alert("Hadiah berhasil diklaim!");

    // redirect jika diperlukan
    // window.location.href="https://linkanda.com";

});
