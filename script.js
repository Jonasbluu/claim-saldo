const envelope = document.getElementById("envelope");
const popup = document.getElementById("popupLetter");

const hadiah = [
    "Rp18.000",
    "Rp28.000",
    "Rp38.000",
    "Rp58.000",
    "Rp88.000",
    "Rp188.000"
];

envelope.addEventListener("click",()=>{

    const random =
    hadiah[Math.floor(Math.random()*hadiah.length)];

    document.getElementById("reward").innerText =
    random;

    popup.classList.add("show");

});
