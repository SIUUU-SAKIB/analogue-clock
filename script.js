let hrHand = document.querySelector(`.hour`)
let minHand =document.querySelector(`.minute`)
let secHand =document.querySelector(`.seconds`)

let time = setInterval(() => {
    let date = new Date();
    let min = date.getMinutes()
    let hr = date.getHours()
    let sec = date.getSeconds()
    let hrDeg = hr * 30 + min / 2;
    let minDeg = (min / 60) *360
    let secDeg = ((sec / 60) * 360) + 90
     hrHand.style.transform = `rotate(${hrDeg}deg)`
     minHand.style.transform = `rotate(${minDeg}deg)`
     secHand.style.transform= `rotate(${secDeg}deg)`
}, 1000);
