const end = require('exit-cli');

module.exports = async () => {
    await end({
        github: `https://github.com/meerhamzadev/`,
        twitter: `https://twitter.com/meerhamzadev`,
    })
}