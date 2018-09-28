class Vertex {

  constructor(other){
    if (other instanceof Array){
      this.points = other.slice(0);
      this.dimensions = new Number(this.points.length)
    }else if (other instanceof Vertex){
      this.points = other.points.slice(0)
      this.dimensions = new Number(this.points.length)
    }
    refresh_value();
  }

  constructor(value, dimensions){
    this.dimensions = []
    for(var i = 0; i < dimensions; i++){
      this.dimensions.push(value)
    }
    refresh_value();
  }

  refresh_value(){
    this.value = 0
    for(var i = 0; i < this.dimensions; i++){
      if(this.points[i] == 1){
        this.value += 2 ** i
      }
    }
  }

  sum(){
    var total = 0
    for(var i = 0; i < this.dimensions; i++){
      total += this.points[i];
    }
    return total
  }

  static generate_points(dimensions, index_masks, values){
    var vertices = []
    var gen_dimensions = dimensions - values.length
    for(var i = 0; i < 2 ** gen_dimensions; i++){
      var p = i.toString(2).padStart(2,0)
      for(var j = 0; j < index_masks.length; j++){
          p = p.splice(index_masks[j], 0, value[j])
      }

      var point = []
      for(var j = 0; j < dimensions; j++){
        if(p[j] == 1){
          point.push(1)
        }else{
          point.push(-1)
        }
      }
      console.log(point)
      vertices.push(new Vertex(point))

    }
    return vertices
  }

  static generate_points(dimensions){
    var vertices = []

    for(var i = 0; i < 2 ** dimensions; i++){
      var p = i.toString(2).padStart(dimensions,0)
      var point = []
      for(var j = 0; j < dimensions; j++){
        if(p[j] == '1'){
          point.push(1)
        } else {
          point.push(-1)
        }
      }
      vertices.push(new Vertex(point))
    }
    return vertices
  }

  static int_to_vector(dimensions, position_in_series){
    var p = position_in_series.toString(2).padStart(dimensions, 0)
    var point = []

    for(var j = 0; j < dimensions; j++){
      if(p[j] == '1'){
        point.push(1)
      } else {
        point.push(-1)
      }
    }

    return new Vertex(point)
  }

  static int_to_bit(dimensions, position_in_series, index){
    var p = position_in_series.toString(2).padStart(dimensions, 0)

    if(p[index] == '1') return 1
    else                return -1


  }

  static same_indices(a, b){
    var same = new Array()
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] == b.points[i]){
        same.push(i)
      }
    }
    return same;
  }

  static same_values(a, b){
    var same = new Array()
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] == b.points[i]){
        diff.push(a.points[i])
      }
    }
    return same;
  }

  static same_sum(a, b){
    var same = new Array()
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] == b.points[i]){
        same.push(i)
      }
    }
    return same;
  }

  static diff_indices(a, b){
    var diff = new Array()
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] != b.points[i]){
        diff.push(i)
      }
    }
    return diff;
  }

  static diff_sum(a, b){
    var diff = 0;
    for(var i = 0; i < a.dimensions; i++){
      if(a.points[i] != b.points[i]){
        diff++;
      }
    }
    return diff;
  }

  static find_a(a, b){
      if(a.value >= b.value) return a
      else return b
  }

  static find_b(a, b){
    if(a.value >= b.value) return b
    else return a
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
