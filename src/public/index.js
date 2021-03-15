window.onload = function () {
    document.getElementById("submitBTN").addEventListener("click", hitEndPoint);
}

function hitEndPoint(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST",'http://localhost:5000/evaluate', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    const formula = document.getElementById("formulaField").value;
    xhr.send(JSON.stringify({body: formula}));

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            document.getElementById("resultMessage").innerText = "RESULT: "+JSON.parse(xhr.response)['stdout'];
        }
    }

}
