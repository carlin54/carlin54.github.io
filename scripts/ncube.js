class NCube {

  construct_vertices(){
    this.vertices = []
    this.num_vertices = 2 ** this.dimensions;
    console.log("Number of Vertices: " + this.num_vertices);
    for (var i = 0; i < this.num_vertices; i++){
      var num = i.toString(2).padStart(this.dimensions, "0")
      var pos = []
      console.log(num)
      for(var j = 0; j < this.dimensions; j++){
        var n = parseInt(num[j])
        if(n == 0){
          n = -1
        }
        pos.push(n)
      }
      this.vertices.push(new Vertex(pos));
    }
  }

  add_edge(a, b){
    var to_add = new Edge(a, b)
    for(var i = 0; i < this.num_edges; i++){
      if(Edge.is_equal(to_add, this.edges[i])){
        console.log("edge already exists");
        return
      }
    }
    this.edges.push(to_add)
    this.num_edges = this.edges.length
  }

  can_make_edge(a, b){
    return Vertex.num_difference(a, b) == 1
  }

  add_face(a, b){
      var to_add = new Face(a, b)
      console.log(to_add.vertices[0].points)
      for(var i = 0; i < this.num_faces; i++){
        if(Face.is_equal(to_add, this.faces[i])){
          console.log("face already exists")
          return
        }
      }
      this.faces.push(to_add)
      this.num_faces = this.faces.length
  }

  can_make_face(a, b){
    return Vertex.num_difference(a, b) == 2
  }

  construct_edges(){
    this.edges = new Array()
    for (var i = 0; i < this.num_vertices; i++){
      for(var j = i+1; j < this.num_vertices; j++){
        if(this.can_make_edge(this.vertices[i], this.vertices[j])){
          this.add_edge(this.vertices[i], this.vertices[j])
        }
      }
    }
    console.log("Number of Edges: " + this.num_edges);
  }

  construct_faces(){
    this.faces = new Array()
    for (var i = 0; i < this.num_vertices; i++){
      for(var j = i+1; j < this.num_vertices; j++){
        if(this.can_make_face(this.vertices[i], this.vertices[j])){
          this.add_face(this.vertices[i], this.vertices[j])
        }
      }
    }
    console.log("Number of Faces: " + this.num_faces)
  }

  constructor(dimensions){
    console.log("creating cube with " + dimensions.toString() + " dimensions...\n")
    this.dimensions = dimensions
    this.size = 3

    this.construct_vertices()
    this.construct_edges()
    this.construct_faces()

  }

};
