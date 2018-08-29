class Vertex {
  
  constructor(points){
    this.points = points;
  }

  length(){
    return this.points.length;
  }

  sum(){
    var total = 0
    for(var i = 0; i < this.length; i++){
      total += this.points[i];
    }
    return total
  }

  static different_indices(a, b){
    var indicies = new Array()
    for(var i = 0; i < a.length; i++){
      if(a.points[i] != b.points[i]){
        indicies.push(i)
      }
    }
    return indicies
  }

  static num_difference(a, b){
    var diff = 0
    for(var i = 0; i < a.length(); i++){
      if(a.points[i] != b.points[i]){
        diff++
      }
    }
    return diff;
  }
  static add(a, b){
    console.log("Hello, World!");
    var out = new Array();
    for(var i = 0; i < a.length(); i++){
      out.push(a.points[i] + b.points[i]);
    }
    return new Vertex(out);
  }

  static chose_a(a, b){
    for(var i = 0; i < a.length(); i++){
      if(a.points[i] > b.points[i]){
        return a
      }else if(a.points[i] < b.points[i]){
        return b
      }
    }
    return a
  }

  static chose_b(a, b){
    for(var i = 0; i < a.length(); i++){
      if(a.points[i] > b.points[i]){
        return b
      }else if(a.points[i] < b.points[i]){
        return a
      }
    }
    return b
  }

  static is_equal(a, b){
    for(var i = 0; i < a.length(); i++){
        if(a.points[i] != b.points[i]){
          return false;
        }
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
