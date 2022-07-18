var rect = {
	perimeter: function (x, y) {
		return (2 * (x + y));
	},
	area: function (x, y) {
		return (x * y)
	}
};
function solveRect(l, b) {
	console.log("Solução para o retangulo com l = " + l + " e b =" + b);

	if (l < 0 || b < 0) {
		console.log("as dimensoes do retangulo devem ser maior que zero: l= " + l + ", e b+ " + b);
	}
	else {
		console.log("A area do retangulo com dimensoes comprimento = " + l + " e largura = " + b + " e " + rect.area(l, b));
		console.log("O perimetro do retangulo com dimensoes comprimento = " + l + " e largura = " + b + " e " + rect.perimeter(l, b));

	}
}
//solveRect(2,4);
solveRect(3, 5);
//solveRect(-3,5);