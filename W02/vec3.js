// Consructor
Vec3 = function(x, y, z){
this.x = x;
this.y = y;
this.z = z;
}

// select min. value
Vec3.prototype.min = function(v){
    retun v[0];
}

// select mid. value
Vec3.prototype.mid = function(v){
    retun v[1];
}

// select max. value
Vec3.prototype.max = function(v){
    retun v[2];
}
