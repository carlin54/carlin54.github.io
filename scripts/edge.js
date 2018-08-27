class Edge {

  constructor(a, b){
    if(a.sum() > b.sum()){
      this.a = a;
      this.b = b;
    }else if(a.sum() < b.sum()){
      this.a = b;
      this.b = a;
    }else{
      for(var i = 0; i < a.length(); i++){
        if(a.points[i] > b.points[i]){
          this.a = a;
          this.b = b;
        }else if (a.points[i] < b.points[i]){
          this.a = b;
          this.b = a;
        }
      }
    }
    this.a = a;
    this.b = b;
  }

  static is_equal(a, b){
    return Vertex.is_equal(a.a, b.a) && Vertex.is_equal(a.b, b.b);
  }

}
