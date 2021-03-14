function btClick() {
  //  evaluate();
   // const evaluator = new Eval();
  //  evaluator.evaluate();
  //  document.write(evaluator.result());
   // document.write("BIG BOB");
    evaluate();
}


function evaluate(){
    let exec = require('child_process').exec, child;
    let result = 'fuck me';
    const expr = '5 + 3 * 7'
    child = exec('java -jar jars/Project.test.jar',
        (error, stdout, stderr) => {
            //  this.result = stdout;
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            result = stdout;
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    document.write('fjaldaskldsj');
    return 'YELLLING ';
}


function hitEndPoint(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST",'http://localhost:5000/evaluate', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({body: '5+4'}));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            alert(xhr.responseText);
        }
    }
}
