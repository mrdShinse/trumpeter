const fingeringChart = require('../fingeringChart.json')

function fingering(note) {
  return fingeringChart[note]
}

module.exports = fingering
