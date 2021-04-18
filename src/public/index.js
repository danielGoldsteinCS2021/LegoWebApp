/*
* Vanilla JS code for index.html file
* */

window.onload = function () {
    document.getElementById("submitBTN").addEventListener("click", hitEndPoint);
    document.getElementById("clearBTN").addEventListener("click", clearHistory);
    setColor();
    document.getElementById('formulaField').addEventListener("keypress", function (event){
        if (event.key === 'Enter')
            document.getElementById("submitBTN").click();
    });
}

// Clears history text area
function clearHistory(){
    document.getElementById("resultsTextArea").value = "";
}

// Runs lego formula against evaluator, which is a post end-point
function hitEndPoint(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:8080/evaluate', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    const formula = '"'+document.getElementById("formulaField").value+'"';
    if (formula !== '""') // ensures user doesn't enter a blank formula
        xhr.send(JSON.stringify({body: formula}));
    else document.getElementById("resultMessage").innerText = 'RESULT: '; // clear result message

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const result = JSON.parse(xhr.response)['stdout'];
            document.getElementById("resultMessage").innerText = 'RESULT: '+result;
            document.getElementById("resultsTextArea").value += 'Formula: '+formula+'\n';
            document.getElementById("resultsTextArea").value += 'Returned: '+result+'\n';
        }
    }

}

function randomColor() {
    return '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6)
}

function setColor(){
    const color = randomColor();
    document.getElementById('welcomeMessage').style.color = color;
    document.getElementById('resultMessage').style.color = color;
    document.getElementById('formulaField').style.borderColor = color;
    document.getElementById('resultsTextArea').style.borderColor = color;
    setTimeout(setColor, 1000);
}

