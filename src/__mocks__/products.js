const fetchData = () => {
  let product = null;
  fetch('https://fs.mis.kuas.edu.tw/~s1106137135/webFinalPHP/searchProduct.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: ''
  })
    .then((res) => res.json())
    .then((data) => {
      product = data;
    })
    .catch((err) => {
      product = err;
    });
  return product;
};

const products = fetchData();

export default products;
