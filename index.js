#!/usr/bin/env node
;`use strict`

// const titles = require('./data').asArray
const path = require('path')
const { Command } = require('commander')
const { debug, parse } = require('./lib')

const program = new Command()
program
    .version(
        require('./package.json').version,
        '-v, --version',
        'output the current version'
    )
    .option('-k, --keep-spaces', 'allow superfluous whitespace', false)
    .option('-d, --debug', 'add debug to output', false)
    .option(
        '-s, --stop-words <words...>',
        'lowercase the given stop words instead of the defaults'
    )
    .option('-f, --file <filePaths...>', 'paths of file containing titles')
    .option('-i, --inline <sentence...>', 'convert inline')
    .option('-u, --unique', 'return unique results')
    .description('convert value into APA style title case')

program.parse()

const results = []
const options = program.opts()

options.debug && debug(options, program.args)

if (options.inline) {
    results.push(parse.inline(options.inline))
}

if (options.file) {
    const fileTitles = parse.file(options.file)
    results.push(Array.from(options.unique ? new Set(fileTitles) : fileTitles))
}

results.flat().map((result) => console.log(result))
