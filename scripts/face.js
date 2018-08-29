class Face {

  constructor(a, b){
    // p1 - [ 1, 1]
    // p2 - [-1, 1]
    // p3 - [-1, 1]
    // p4 - [-1,-1]
    console.log("constructor")
    var diff = Vertex.different_indices(a, b)

    this.points = new Array()

    var p1 = a
    p1.points[diff[0]] = 1
    p1.points[diff[1]] = 1

    var p2 = a
    p2.points[diff[0]] =-1
    p2.points[diff[1]] = 1

    var p3 = a
    p3.points[diff[0]] =-1
    p3.points[diff[1]] =-1

    var p4 = a
    p4.points[diff[0]] = 1
    p4.points[diff[1]] =-1

    console.log(p1.points)
    console.log(p2.points)
    console.log(p3.points)
    console.log(p4.points)

    this.vertices = [p1, p2, p3, p4]

  }

  static is_equal(a, b){
    return Vertex.is_equal(a.vertices[0],b.vertices[0]) &&
           Vertex.is_equal(a.vertices[2],b.vertices[2])
  }



}
