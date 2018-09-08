
class Face {

  constructor(a, b, color, size){
    this.indices = Vertex.diff(a, b)
    this.vertices = new Array()

    for(var i = 0; i < 4; i++){
      var copy = new Vertex(a)
      this.vertices.push(copy)
    }

    this.vertices[0].points[this.indices[0]] =-1
    this.vertices[0].points[this.indices[1]] = 1

    this.vertices[1].points[this.indices[0]] = 1
    this.vertices[1].points[this.indices[1]] = 1

    this.vertices[2].points[this.indices[0]] = 1
    this.vertices[2].points[this.indices[1]] =-1

    this.vertices[3].points[this.indices[0]] =-1
    this.vertices[3].points[this.indices[1]] =-1

  }


  static is_equal(a, b){
    return Vertex.is_equal(a.vertices[1], b.vertices[1]) &&
           Vertex.is_equal(a.vertices[3], b.vertices[3]);
  }

}
