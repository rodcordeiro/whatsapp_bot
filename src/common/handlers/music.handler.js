class Point {
  constructor(id, ritmo, idLinha, linha, tipo, ponto, audioLink = undefined) {
    this.id = id;
    this.ritmo = ritmo;
    this.idLinha = idLinha;
    this.linha = linha;
    this.tipo = tipo;
    this.ponto = ponto;
    this.audioLink = audioLink;
    this.hasAudio = audioLink ? true : false;
  }
}

class Category {
  constructor(id, linha, categoria) {
    this.id = id;
    this.linha = linha;
    this.categoria = categoria;
  }
}

module.exports.Point = Point;
module.exports.Category = Category;
