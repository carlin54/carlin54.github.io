var js = document.createElement("script");

js.type = "text/javascript";
js.src = "scripts/vertex.js";

document.body.appendChild(js);

class NCube{

  construct_vertices(){
    this.vertices = []
    this.num_vertices = 2 ** this.dimensions;
    console.log("Number of Verticies: " + this.num_vertices);
    for (var i = 0; i < this.num_vertices; i++){
      var num = i.toString(2).padEnd(this.dimensions, "0");
      var pos = [];
      for(var j = 0; j < this.dimensions; j++){
        var n = parseInt(num[j]);
        if(n == 0){
          n = -1;
        }
        pos.push(n);

      }
      console.log("Vertex: " + pos.toString());
      this.vertices.push(new Vertex(pos));
    }
  }

  add_edge(a, b){
    var to_add = new Edge(a, b);
    for(var i = 0; i < this.edges.length; i++){
      if(Edge.is_equal(to_add, this.edges[i]){
        return;
      }
    }
    this.edges.push(to_add);
  }

  can_make_edge(a, b){
    var diff = 0;
    for(var i = 0; i < a.length; i++){
      if(a.points[i] != b.points[i]){
        diff++;
      }
    }
    return diff == 1;
  }

  construct_edges(){
    this.edges = []

    for (var i = 0; i < this.num_vertices; i++){
      for(var j = 0; j < this.num_vertices; j++){
        if(i != j){
          if(this.can_make_edge(this.vertices[i], this.vertices[j])){
              this.add_edge(this.vertices[i], this.vertices[j]);
          }
        }
      }
    }
    console.log("Number of Edges: " + this.num_edges);

  }

  construct_faces(){

  }

  constructor(dimensions){
    console.log("creating cube with " + dimensions.toString() + " dimensions...\n");
    this.dimensions = dimensions;
    this.size = 3;

    this.construct_vertices();
    this.construct_edges();
    this.construct_faces();

  }

  test(){
    console.log("Hello, World!");
  }

};
