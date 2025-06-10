
et arrInts = [1, 2, 3, 4, 5];
let products = [];

function someCode() {
  throw new Error("This is an error");
}

someCode();
function addProduct(product) {
  products.push(product);
}

// foreach(),  find(), filter()

arrInts.forEach((item) => {
  console.log(item);
}       );


// splice() - remove elements from an array
//slice() - extract elements from an array=