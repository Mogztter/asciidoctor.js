'use strict'

const rollup = require('rollup')

module.exports.rollup = async (inputOptions, outputOptions) => {
  const bundle = await rollup.rollup(inputOptions)
  return bundle.write(outputOptions)
}
