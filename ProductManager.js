class ProductManager {
    constructor() {
      this.products = [];
      this.id = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son requeridos.");
        return;
      }
  
      for (const product of this.products) {
        if (product.code === code) {
          console.error("El producto existe.");
          return;
        }
      }
  
      const product = {
        id: this.id,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      };
      this.products.push(product);
      this.id++;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      for (const product of this.products) {
        if (product.id === id) {
          return product;
        }
      }
      console.error("Not Found");
      return null;
    }
  }
  const productManager = new ProductManager();
  
  productManager.addProduct("Coca Cola", "Refresco", 100, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.comprar-bebidas.com%2Fcoca-cola-lata-33cl-importancion&psig=AOvVaw3DYsbTXbw4Ipc9e9tHjva7&ust=1682362907571000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPj5ja7YwP4CFQAAAAAdAAAAABAE", "01", 10);
  productManager.addProduct("Fanta Naranja", "Refresco", 200, "https://www.dragonoriental.com/976-large_default/fanta-de-naranja-330ml.jpg", "02", 20);
  productManager.addProduct("Fanta Naranja", "Refresco", 200, "https://www.dragonoriental.com/976-large_default/fanta-de-naranja-330ml.jpg", "02", 20);
  productManager.addProduct("Agua", "Bebida", 200, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcabreiroa.es%2F&psig=AOvVaw2IyKRjsXtc_0HEnR7U8CIH&ust=1682363118506000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiExpLZwP4CFQAAAAAdAAAAABAE", "03", 20);
  productManager.addProduct("Red Bull","Bebida", 200, "02", 20);

  console.log(productManager.getProducts());
  
  const product = productManager.getProductById(1);
  
  console.log(product);

  console.log(productManager.getProductById(5))

 

