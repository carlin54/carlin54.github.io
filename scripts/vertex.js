class Vertex {

  constructor(other){
    if (other instanceof Array){
      this.points = other.slice(0);
      this.dimensions = new Number(this.points.length)
    }else if (other instanceof Vertex){
      this.points = other.points.slice(0)
      this.dimensions = new Number(this.points.length)
    }
  }



  sum(){
    var total = 0
    for(var i = 0; i < this.dimensions; i++){
      total += this.points[i];
    }
    return total
  }

  static diff(a, b){
    var diff = new Array()
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] != b.points[i]){
        diff.push(i)
      }
    }
    return diff;
  }

  static sum_diff(a, b){

    var diff = 0;
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] != b.points[i]){
        diff++;
      }
    }
    return diff;
  }

  static find_a(a, b){
      for(var i = 0; i < a.dimensions; i++){
        if(a.points[i] > b.points[i]){
          return a
        }else if(a.points[i] < b.points[i]){
          return b
        }
      }
      return a
  }

  static find_b(a, b){
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] > b.points[i]){
        return b
      }else if(a.points[i] < b.points[i]){
        return a
      }
    }
    return b
  }

  static add(a, b){
    var out = new Array();
    for(var i = 0; i < a.dimensions; i++){
      out.push(a.points[i] + b.points[i]);
    }
    return new Vertex(out);
  }

  static is_equal(a, b){
    for(var i = 0; i < a.dimensions; i++){
        if(a.points[i] != b.points[i]){
          return false;
        }
    }
    return true;
  }

  static subtract(a, b){
    out = []
    for(var i = 0; i < a.dimensions; i++){
      out.push(a.points[i] - b.points[i]);
    }
    return new Vertex(out);
  }

  static dot_product(a, b){
    out = 0;
    for(var i = 0; i < a.dimensions; i++){
      out += a.points[i] * b.points[i];
    }
    return out;
  }

};
