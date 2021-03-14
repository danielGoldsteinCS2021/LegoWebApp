

class Eval{
    public async evaluate(formula: any | undefined) {
        const {promisify} = require('util');
        const exec = promisify(require('child_process').exec);
        return await exec('java -jar jars/Lego.jar ' + formula);
    }
}
export = Eval;

