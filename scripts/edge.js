class Edge {

  constructor(a, b){
    this.a = Vertex.find_a(a, b)
    this.b = Vertex.find_b(a, b)
  }

  static is_equal(a, b){
    return Vertex.is_equal(a.a, b.a) && Vertex.is_equal(a.b, b.b);
  }

}
