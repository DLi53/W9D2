class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    this.setupBoard();
  }

  setupBoard() {
    const tgrid = this.game.board.grid;
    let ul = document.createElement("ul");
    for (let i = 0; i< tgrid.length; i ++){
      for (let j = 0; j < tgrid[0].length; j++){
        let li = document.createElement("li");
        ul.appendChild(li);
    }
  }
  this.el.appendChild(ul);
}


  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
