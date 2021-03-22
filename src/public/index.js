window.onload = function () {
    document.getElementById("submitBTN").addEventListener("click", hitEndPoint);
    document.getElementById("clearBTN").addEventListener("click", clearHistory);
    setColor();
}

function clearHistory(){
    document.getElementById("resultsTextArea").value = "";
}

function hitEndPoint(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST",'http://localhost:5000/evaluate', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    const formula = '"'+document.getElementById("formulaField").value+'"';
    if (formula !== '""')
        xhr.send(JSON.stringify({body: formula}));

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
    setTimeout(setColor, 500);
}

