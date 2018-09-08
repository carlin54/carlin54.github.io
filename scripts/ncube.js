class NCube {

  construct_vertices(){
    this.vertices = []
    this.num_vertices = 2 ** this.dimensions;
    for (var i = 0; i < this.num_vertices; i++){
      var num = i.toString(2).padStart(this.dimensions, "0");
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
      for(var j = 0; j < this.num_vertices; j++){
        if(this.can_make_face(this.vertices[i], this.vertices[j])){
          this.add_face(this.vertices[i], this.vertices[j])
        }
      }
    }
  }

  constructor(dimensions){
    console.log("Creating cube with " + dimensions.toString() + " dimensions...\n");
    this.dimensions = dimensions;
    this.size = 3;

    this.construct_vertices()
    console.log("Number of Vertices: " + this.num_vertices)

    this.construct_edges()
    console.log("Number of Edges: " + this.num_edges)

    this.construct_faces()
    console.log("Number of Faces: " + this.num_faces)
  }

};
