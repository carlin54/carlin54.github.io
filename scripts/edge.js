class Edge {

  constuctor(a, b){
    for(var i = 0; i < a.points.length; i++){
      if(a.points[i] > b.points[i]){
        break;
      }else if(a.points[i] < b.points[i]){
        swap = new Array(a.points);
        a = b;
        b = new Vertex(swap.points);
      }
    }
    this.a = a;
    this.b = b;
  }

  static is_equal(a, b){
    return Vertex.is_equal(a.a, b.a) && Vertex.is_equal(a.b, b.b);
  }

}
