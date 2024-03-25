window.onload = function () {
    let container = document.getElementById("products-container");
   
   
    fetch("https://fakestoreapi.com/products")
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        data.forEach(function (item) {
          let product = document.createElement("div");
          let img = document.createElement("img");
          let product_info = document.createElement("div");
          let product_price = document.createElement("div");
          let product_name = document.createElement("div");
          let add_btn = document.createElement("button");
   
   
          product.appendChild(img);
          product.appendChild(product_info);
          product_info.appendChild(product_price);
          product_info.appendChild(product_name);
          product_info.appendChild(add_btn);
          img.src = item.image;
          product_name.textContent = item.title;
          add_btn.textContent = "Add to cart";
          product.classList = "product";
          product_info.classList = "product_info";
          container.appendChild(product);
        });
      })
      .catch();
   };
   