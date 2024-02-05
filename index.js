const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stopr = document.querySelector(".stop");
const star = document.querySelectorAll(".fa-star");
const emoji = document.querySelectorAll(".fa-regular");
const emojiColor = ["red", "orange", "lightblue", "lightgreen", "green"];

const imgBox = document.querySelector(".imgBox");
const pic =  document.querySelector(".pic");
const input = document.querySelector(".input")
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    QrScan()
})

function QrScan(){
    if(input.value.length > 0){
        pic.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;

        imgBox.classList.add("show-img")
    }else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error")
        },1000)
    }
}
/* clock start */

let [miliseconds, seconds, minutes, hours] = [0,0,0,0];
let watch = null;

start.addEventListener("click", ()=>{

    if (watch !== null) {
        clearInterval(watch)
    }

    watch = setInterval(startWt, 10 )
})

stopr.addEventListener("click", ()=>{
    clearInterval(watch)
})

reset.addEventListener("click", ()=>{
    clearInterval(watch)

    timer.innerHTML = "00:00:00:000"
})

function startWt(){
    miliseconds +=10;
    if (miliseconds==1000) {
        miliseconds=0;
        seconds ++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }

    let h = hours<10 ? "0" + hours:hours;
    let m = minutes<10 ? "0" + minutes:minutes;
    let s = seconds<10 ? "0" + seconds:seconds;
    let mi = miliseconds<10 ? "0" + miliseconds:miliseconds<1000 ? "0" + miliseconds:miliseconds;

    timer.innerHTML = `${h} : ${m} : ${s} : ${mi}`
}


/* rating start */
star.forEach((star, index)=>{
    star.addEventListener("click", ()=>{
        updateRt(index)
    })

})
function updateRt(index){
    star.forEach((star, inx)=>{
        if(inx < index +1){
            star.classList.add("active")
        }else{
            star.classList.remove("active")

        }
    })

    emoji.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${index *50}px)`;
        emoji.style.color = emojiColor[index]
    })
}

/* rating end */


