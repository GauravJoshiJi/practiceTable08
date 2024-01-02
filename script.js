fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.products;
  })
  .then((productData) => {
    let products = "";
    productData.map((values, key) => {
      products += `
      <tr>
      <td>${key + 1}</td>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td>${values.rating}</td>
      <td><img src="${values.thumbnail}" /></td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = products;
  });
