// Consructor
function Vec3(x, y, z){
this.x = x;
this.y = y;
this.z = z;
}

// select min. value
Vec3.prototype.min = function(v){
    return Math.min(v);
}

// select mid. value
Vec3.prototype.mid = function(v){
    var max = Math.max(v);
    var min = Math.min(v);
    
    if (v.x!=max && v.x!=min){
        return v.x;
    }else if (v.y!=max && v.y!=min){
        return v.y;
    }else {
        return v.z;
    }
    
}

// select max. value
Vec3.prototype.max = function(v){
    return Math.max(v);
}
