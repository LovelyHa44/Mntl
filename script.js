e = [];// trails
h = [];// heart path
O = c.width = innerWidth;
Q = c.height = innerHeight;

v = 32; // num trails, num particles per trail & num nodes in heart path
M = Math;
R = M.random;
C = M.cos;
Y = 6.3;// close to 44/7 or Math.PI * 2 - 6.3 seems is close enough. 
for( i = 0; i <Y; i+= .2 ) { // calculate heart nodes, from http://mathworld.wolfram.com/HeartCurve.html
	h.push([
		O/2 + 180*M.pow(M.sin(i), 3),
		Q/2 + 10 * (-(15*C(i) - 5*C(2*i) - 2*C(3*i) - C(4*i)))
	])
}

i = 0;
while (i < v ) {

	x = R() * O;
	y = R() * Q;

	H = i/v * 80 + 280;
	S = R() * 40 + 60;
	B = R() * 60 + 20;

	f = []; // create new trail

	k = 0;
	while ( k < v ) { 
		f[k++] = { // create new particle
			x : x, // position 
			y : y,
			X : 0, // velocity
			Y : 0,
			R : (1 - k/v)  + 1, // radius
			S : R
