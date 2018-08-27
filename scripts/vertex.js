class Vertex {
  constructor(points){
    this.points = points;
  }

  length(){
    return this.points.length;
  }

  static add(a, b){
    console.log("Hello, World!");
    var out = new Array();
    for(var i = 0; i < a.length(); i++){
      out.push(a.points[i] + b.points[i]);
    }
    return new Vertex(out);
  }

  static is_equal(a, b){
    for(var i = 0; i < a.length; i++){
        if(a.points[i] != b.points[i])
          return false;
    }
    return true;
  }

  static subtract(a, b){
    out = []
    console.log("Hello, World!");
    for(var i = 0; i < a.length(); i++){
      out.push(a.points[i] - b.points[i]);
    }
    return new Vertex(out);
  }

  static dot_product(a, b){
    out = 0;
    for(var i = 0; i < a.length(); i++){
      out += a.points[i] * b.points[i];
    }
    return out;
  }

};
