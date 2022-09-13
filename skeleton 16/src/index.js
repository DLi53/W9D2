const View = require('./ttt-view.js')
const Game = require('../ttt_node/game')

document.addEventListener("DOMContentLoaded", () => {

  const htmlelement = document.querySelector(".ttt")
  const g = new Game()
  const v = new View(g, htmlelement)
});


