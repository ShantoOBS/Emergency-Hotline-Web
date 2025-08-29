
let Database = [];
let heartCount = document.querySelector("#heartCount");
let currentCoin = document.querySelector("#currentCoin");
let copyCount = document.querySelector("#copyCount");

function heartValueIncrease() {
    let currentNum = parseInt(heartCount.textContent) + 1;
    heartCount.textContent = currentNum;
}

function copyValueIncrease() {
    let currentNum = parseInt(copyCount.textContent) + 1;
    copyCount.textContent = currentNum;
}

async function copied(a,b){
   
    const copyValue=document.getElementById(b);
    const numberText = document.getElementById(a).textContent.trim();
    try {
        await navigator.clipboard.writeText(numberText);
        alert(`Copied to clipboard: ${numberText}`);
    } catch (err) {

        const ta = document.createElement("textarea");
        ta.value = numberText;
        document.body.appendChild(ta);
        ta.select();
        document.body.removeChild(ta);
        alert(`Copied to clipboard: ${numberText}`);
    }

    let common = document.querySelectorAll(".common-copy");

    for (let x of common) {
        x.innerHTML=`<i class="fa-regular fa-copy"></i> Copy`;
    }
    
    copyValue.innerHTML=`<i class="fa-regular fa-copy"></i> Copied`;



}

function getCurrentTime() {
    let now = new Date();


    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;


    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function colorSetUp(e) {

    let common = document.querySelectorAll(".common");

    for (let x of common) {
        x.style.backgroundColor = "";
    }
    let bt = document.getElementById(e);
    bt.style.backgroundColor = "red";
}

function coinUpdate(a, b, c) {

    let title = document.getElementById(a).textContent;
    let subTitle = document.getElementById(b).textContent;
    let serviceNumber = document.getElementById(c).textContent;

    let time = getCurrentTime();

    let temp = [title, serviceNumber, time];

    let presentCoin = parseInt(currentCoin.textContent);

    if (presentCoin >= 20) {

        alert(`📞 Calling ${subTitle} at ${serviceNumber},,,,`)
        presentCoin -= 20;
        currentCoin.textContent = presentCoin;

        Database.push(temp);

        let insert = document.getElementById("insert-section");

        insert.innerHTML = "";

        for (let x of Database) {

            let dtitle = x[0];
            let dnumber = x[1];
            let dtime = x[2];

            console.log(dtitle, dtime, dnumber)

            let div = document.createElement("div");
            div.innerHTML = `
                <div class="bg-[#fafafa] flex justify-between items-center p-2 mb-2">
                    <div>
                        <p class="text-[1.1rem] font-bold">${dtitle}</p>
                        <p class="text-[1.1rem] text-[#5c5c5c]">${dnumber}</p>
                    </div>
                    <div>
                        <p class="text-[1.1rem]">${dtime}</p>
                    </div>

                   </div>                
          `

            insert.appendChild(div)

        }

    }
    else {
        alert("Insufficient coins! You need at least 20 coins to make a call.");
    }
}

//  heart button section
document.querySelector("#heart1").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart2").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart3").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart4").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart5").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart6").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart7").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart8").addEventListener("click", (e) => {
    heartValueIncrease();
});
document.querySelector("#heart9").addEventListener("click", (e) => {
    heartValueIncrease();
});


//  call button section 

document.querySelector("#call-1").addEventListener("click", (e) => {
    colorSetUp("call-1");
    coinUpdate("title-1", "sub-title-1", "number-1");
});
document.querySelector("#call-2").addEventListener("click", (e) => {
    colorSetUp("call-2");
    coinUpdate("title-2", "sub-title-2", "number-2");
});
document.querySelector("#call-3").addEventListener("click", (e) => {
    colorSetUp("call-3");
    coinUpdate("title-3", "sub-title-3", "number-3");
});
document.querySelector("#call-4").addEventListener("click", (e) => {
    colorSetUp("call-4");
    coinUpdate("title-4", "sub-title-4", "number-4");
});
document.querySelector("#call-5").addEventListener("click", (e) => {
    colorSetUp("call-5");
    coinUpdate("title-5", "sub-title-5", "number-5");
});
document.querySelector("#call-6").addEventListener("click", (e) => {
    colorSetUp("call-6");
    coinUpdate("title-6", "sub-title-6", "number-6");
});
document.querySelector("#call-7").addEventListener("click", (e) => {
    colorSetUp("call-7");
    coinUpdate("title-7", "sub-title-7", "number-7");
});
document.querySelector("#call-8").addEventListener("click", (e) => {
    colorSetUp("call-8");
    coinUpdate("title-8", "sub-title-8", "number-8");
});
document.querySelector("#call-9").addEventListener("click", (e) => {
    colorSetUp("call-9");
    coinUpdate("title-9", "sub-title-9", "number-9");
});

// clear button

document.querySelector("#clear-btn").addEventListener("click", (e) => {
    let insert = document.getElementById("insert-section");
    insert.innerHTML = "";
    Database = [];
});

//  copy button section
document.querySelector("#copy-1").addEventListener("click", async () => {
     copied("number-1","copy-1");
     copyValueIncrease();
});
document.querySelector("#copy-2").addEventListener("click", async () => {
     copied("number-2","copy-2");
     copyValueIncrease();
});
document.querySelector("#copy-3").addEventListener("click", async () => {
     copied("number-3","copy-3");
     copyValueIncrease();
});
document.querySelector("#copy-4").addEventListener("click", async () => {
     copied("number-4","copy-4");
     copyValueIncrease();
});
document.querySelector("#copy-5").addEventListener("click", async () => {
     copied("number-5","copy-5");
     copyValueIncrease();
});
document.querySelector("#copy-6").addEventListener("click", async () => {
     copied("number-6","copy-6");
     copyValueIncrease();
});
document.querySelector("#copy-7").addEventListener("click", async () => {
     copied("number-7","copy-7");
     copyValueIncrease();
});
document.querySelector("#copy-8").addEventListener("click", async () => {
     copied("number-8","copy-8");
     copyValueIncrease();
});
document.querySelector("#copy-9").addEventListener("click", async () => {
     copied("number-9","copy-9");
     copyValueIncrease();
});

