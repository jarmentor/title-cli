const fs = require('fs')
const titleCase = require('ap-style-title-case')
/**
 * file
 * @date 2021-04-12
 * @param {array} paths
 * @returns {array}
 */

const file = (paths) => {
    let data = []
    paths.map((path) => {
        data.push(fs.readFileSync(path, 'utf8').split('\n'))
    })
    return data.flat().map((item) => titleCase(item.toLowerCase()))
}

/**
 * inline
 * @date 2021-04-12
 * @param {array} toConvert
 * @returns {string}
 */

function inline(toConvert) {
    return titleCase(toConvert.join(' ').toLowerCase())
}

module.exports = { file, inline }
