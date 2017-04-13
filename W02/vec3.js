// Consructor
function Vec3(x, y, z){
this.x = x;
this.y = y;
this.z = z;
}

// select min. value
Vec3.prototype.min = function(v){
    return Math.min(v.x, v.y, v.z);
}

// select mid. value
Vec3.prototype.mid = function(v){
    var max = Math.max(v.x, v.y, v.z);
    var min = Math.min(v.x, v.y, v.z);
    
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
    return Math.max(v.x, v.y, v.z);
}
