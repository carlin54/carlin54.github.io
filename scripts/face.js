
class Face {

  constructor(a, b, color){

    this.diff_sum = Vertex.diff_sum(a, b)
    this.diff_indices = Vertex.diff_indices(a, b)

    this.same_values = Vertex.same_values(a, b)
    this.same_sum = Vertex.same_sum(a, b)
    this.same_indices = Vertex.same_indices(a, b)

    console.log("Values: " + this.same_values[0])
    console.log("Indices: " + this.same_indices[0])

    this.spatial_dimensions = a.length
    this.dimensions = this.diff_sum

    this.color = color

    this.a = copy(a)
    this.b = copy(a)
    for(var i = 0; i < this.sum_diff; i++){
      this.a[this.diff[i]] = -1
      this.b[this.diff[i]] =  1
    }

    this.vertices = Vertex.generate_points(this.dimensions, this.same_indices, this.same_values)

  }


  static is_equal(a, b){
    return true
  }

}
