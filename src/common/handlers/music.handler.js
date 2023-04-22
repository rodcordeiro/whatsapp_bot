class Point {
  constructor(arr) {
    this.data = arr.map(item=>({
      id: item.id,
    ritmo:item.ritmo,
    idLinha :item.idLinha,
    linha:item.linha,
    tipo:item.tipo,
    ponto:item.ponto,
    audioLink :item.audioLink,
    hasAudio  :item.audioLink ? true : false
    }))    
  }
  getRandom() {
    const random = Math.floor(Math.random() * this.data.length);
    const randomItem = this.data[random];
    return randomItem;
  }
  filterByLineId(id){
    return this.data.filter(item=>item.idLinha===id)
  }
}

class Category {
  constructor(arr) {
    this.data=arr.map(item=>({
      id:item.id,
      linha:item.linha,
      categoria:item.categoria
    }))
  }
  getRandom() {
    const random = Math.floor(Math.random() * this.data.length);
    const randomItem = this.data[random];
    return randomItem;
  }
  filterByCategory(id){
    return this.data.filter(item=>item.idLinha===id)
  }
}

module.exports.Point = Point;
module.exports.Category = Category;
