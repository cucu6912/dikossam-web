let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["마인크래프트 레이드 리소스팩"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink , 500);   