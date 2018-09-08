class NCube {

  generate_color(i){
    return
      new Color(((((256) / 4 ) * 1) * i) % 256,
                ((((256) / 4 ) * 2) * i) % 256,
                ((((256) / 4 ) * 3) * i) % 256)
  }

  construct_vertices(){
    /*this.vertices = []
    this.num_vertices = 2 ** this.dimensions;
    for (var i = 0; i < this.num_vertices; i++){
      var num = i.toString(2).padStart(this.dimensions, "0");
      console.log(num)
      var pos = [];
      for(var j = 0; j < this.dimensions; j++){
        var n = parseInt(num[j]);
        if(n == 0){
          n = -1;
        }
        pos.push(n);
      }
      var to_add = new Vertex(pos)
      this.vertices.push(to_add)
    }*/

    this.verticies = []
    this.num_vertices = 2 ** this.dimensions
    this.num_face_dimesions = this.dimesions - 1
    this.num_face_vertices = 2 ** this.num_face_dimensions
    this.num_sides = 2 * this.dimensions
    for(var i = 0; i < this.num_sides; i++){
      var ind_pos = Math.floor(i / 2)
      var ind_val = (i % 2 == 0) ? -1 : 1
      var color = this.generate_color(i)
      console.log(ind_pos)
      console.log(ind_val)
      for(var j = 0; j < this.num_face_dimesions; j++){
        var str = j.toString(2).padStart(this.dimesions, "0")
        str.splice(ind_pos, 1, ind_val.toString())
        console.log(str)
      }
    }

  }

  add_edge(a, b){
    var to_add = new Edge(a, b)
    for(var i = 0; i < this.num_edges; i++){
      if(Edge.is_equal(to_add, this.edges[i])){
        return;
      }
    }
    this.edges.push(to_add);
    this.num_edges = this.edges.length;
  }

  can_make_edge(a, b){
    return Vertex.sum_diff(a, b) == 1
  }

  construct_edges(){
    this.edges = new Array()
    this.num_edges = this.edges.length
    for (var i = 0; i < this.num_vertices; i++){
      for(var j = i+1; j < this.num_vertices; j++){
        if(this.can_make_edge(this.vertices[i], this.vertices[j])){
            this.add_edge(this.vertices[i], this.vertices[j])
        }
      }
    }
  }

  add_face(a, b){
    var to_add = new Face(a, b)
    for(var i = 0; i < this.num_faces; i++){
      if(Face.is_equal(to_add, this.faces[i])){
        return;
      }
    }
    this.faces.push(to_add);
    this.num_faces = this.faces.length;
  }

  can_make_face(a, b){
    return Vertex.sum_diff(a, b) == 2
  }

  construct_faces(){
    this.faces = new Array()
    this.num_faces = this.faces.length

    for(var i = 0; i < this.num_vertices; i++){
      for(var j = i+1; j < this.num_vertices; j++){
        if(this.can_make_face(this.vertices[i], this.vertices[j])){
          this.add_face(this.vertices[i], this.vertices[j])
        }
      }
    }
  }

  constructor(dimensions){
    console.log("Creating cube with " + dimensions.toString() + " dimensions...\n");
    this.dimensions = dimensions
    this.num_sides = this.dimensions * 2
    this.row_size = 3

    this.construct_vertices()
    console.log("Number of Vertices: " + this.num_vertices)

    //this.construct_edges()
    //console.log("Number of Edges: " + this.num_edges)

    //this.construct_colors()
    //console.log("Number of Side: " + this.num_sides)

    //this.construct_faces()
    //console.log("Number of Faces: " + this.num_faces)

    for(var i = 0; i < this.num_vertices; i++){

      console.log()
    }

    for(var i = 0; i < this.vertices; i++){
      if(this.vertices.points[0] == -1){
        console.log(this.vertices.points)
      }
    }
  }

};
