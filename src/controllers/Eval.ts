/*
* This class is used to execute any lego formula passed to it's evaluate method.
* It uses the child_process library to create a process that can execute java code.
* Must be async so await can be used, this way the program 'halts' until the evaluator finishes.
* */

class Eval{
    public async evaluate(formula: any | undefined) {
        const {promisify} = require('util');
        const exec = promisify(require('child_process').exec);
        let result: any;
        try{
            result = await exec('java -jar jars/Lego.jar ' + formula);
        } catch (error){
            result = {'stdout' : 'invalid\n'};
        }
        return result;
    }
}
export = Eval;

