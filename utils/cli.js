const exec = require('node-async-exec');

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
        await exec({
            path: `${process.cwd()}/`,
            cmd: commands
        })
    }
    catch (e) {
        console.log(`Error: ${e}`);
    }
}