class NCube {

  generate_color(i, n){
    return
      new Color(Math.floor((Math.random() * 256) + 1),
                Math.floor((Math.random() * 256) + 1),
                Math.floor((Math.random() * 256) + 1))
  }

  construct_vertices(){

  }


  constructor(dimensions){
    console.log("Creating cube with " + dimensions.toString() + " dimensions...\n");
    this.dimensions = dimensions
    this.num_sides = 2 * this.dimensions

    this.vertices = Vertex.generate_points(this.dimensions)
    this.num_vertices = this.vertices.length

    this.num_sides = 2 * this.dimensions
    for(var i = 0; i < this.num_faces; i++){
      var bit_index = i / 2
      var value = Vertex.int_to_bit(this.dimensions, i, bit_index)
      var color = generate_color(i, this.num_sides)
      for(var i = 0; i < this.num_faces; i++){
        
      }

    }

    console.log("Number of Vertices: " + this.num_vertices)


  }

};
