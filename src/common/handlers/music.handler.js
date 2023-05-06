class Base {
  constructor(arr,cb) {
    this.data = arr.map(cb);
  }
  getRandom() {
    const random = Math.floor(Math.random() * this.data.length);
    const randomItem = this.data[random];
    return randomItem;
  }
  
}



class Point extends Base {
  constructor(arr) {
    super(arr,item => ({
      id: item.id,
      ritmo: item.ritmo,
      idLinha: item.idLinha,
      linha: item.linha,
      tipo: item.tipo,
      ponto: item.ponto,
      audioLink: item.audio_link,
      hasAudio: item.audio_link ? true : false,
    }));
  }
  
  filterByLineId(id) {
    return this.data.filter(item => item.idLinha === id);
  }
}

class Category extends Base {
  constructor(arr) {
    super(arr, item => ({
      id: item.id,
      linha: item.linha,
      categoria: item.categoria,
    }));
  }
  
  filterByCategory(id) {
    return this.data.filter(item => item.categoria === id);
  }
}

module.exports.Point = Point;
module.exports.Category = Category;
