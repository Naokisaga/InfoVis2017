// Consructor
Vec3 = function(x, y, z){
this.x = x;
this.y = y;
this.z = z;
}

// select min. value
Vec3.prototype.min = function(v){
    retun v.x;
}

// select mid. value
Vec3.prototype.mid = function(v){
    retun v.y;
}

// select max. value
Vec3.prototype.max = function(v){
    retun v.z;
}
