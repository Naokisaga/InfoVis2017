// Consructor
function AreaOfTriangle(v0, v1, v2){
 var a = Math.pow(v0.x - v1.x, 2) + Math.pow(v0.y - v1.y, 2)  + Math.pow(v0.z - v1.z, 2);
 a = Math.sqrt(a);
 console.log(a);

 var b = Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2)  + Math.pow(v1.z - v2.z, 2);
 b = Math.sqrt(b);
 console.log(b);

 var c = Math.pow(v2.x - v0.x, 2) + Math.pow(v2.y - v0.y, 2)  + Math.pow(v2.z - v0.z, 2);
 c = Math.sqrt(c);
 console.log(c);

var s = (a+b+c)/2;

var ss =  Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log(ss);

return ss;

}

