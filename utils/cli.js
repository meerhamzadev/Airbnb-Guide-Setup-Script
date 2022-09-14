const exec = require('node-async-exec');
const ora = require('ora');

module.exports = async () => {
    try {
        const commands =
            [
                `npm init --yes`,
                `npm install eslint eslint-config-airbnb-base@latest eslint-plugin-import -D`,
                `touch index.js`,
                `touch .eslintrc.js`,
                `echo "module.exports={ \'extends\' : \'airbnb-base\' }" > .eslintrc.js`
            ]
        const spinner = ora('Installing dev dependencies').start();
        await exec({
            path: `${process.cwd()}/`,
            cmd: commands
        })
        spinner.succeed(`Dependencies installed successfully.`);
        spinner.succeed(`Successfully setup eslint and airbnb style guide.`);
    }
    catch (error) {
        return ora().start().fail(`unable to install the dependencies\n\n${error}`);
    }
}