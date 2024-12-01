import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Products.css";
import ProductItem from "./ProductItem";

const AllPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export default function Products() {
  const { tg } = useTelegram();
  const [products, setProduct] = React.useState([
    {
      title: "apple",
      description: "this is the best apple!",
      price: "199$",
    },
  ]);
  const [addItem, setAddItem] = React.useState([]);

  const onAdd = (product) => {
    let addedProduct = addItem.find(item => item.id === product.id)
    let newProductList = [];

    if (addedProduct) {
      newProductList = addItem.filter(item => item.id !== product.id);
    } else {
      newProductList = [...addItem, product];
    }
    setAddItem(newProductList);

    if (addItem.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy ${AllPrice(newProductList)}`,
      });
    }
  };

  return (
    <div className="Products">
      {products.map((product) => (
        <ProductItem product={product} onAdd={onAdd} className="items" />
      ))}
    </div>
  );
}
