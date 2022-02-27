import { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderStore = (props) => {
  const [order, setOrder] = useState({
    count: 1,
    product: {},
    name: null,
    phone: null,
    details: null,
  });

  const minus = () => {
    const count = order.count - 1 > 0 ? order.count - 1 : order.count;
    setOrder((bn) => ({ ...bn, count }));
  };

  const add = () => {
    const count = order.count + 1;
    setOrder((bn) => ({ ...bn, count }));
  };

  return (
    <OrderContext.Provider value={{ order, minus, add, setOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
