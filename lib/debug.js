/**
 * debug
 * @date 2021-04-12
 * @param {object} options
 * @param {array} args
 * @returns {void}
 */
function debug(options, args) {
    console.log('Options: ', options)
    console.log('Remaining arguments: ', args)
}

module.exports = debug
