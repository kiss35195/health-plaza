import { useSelector } from "react-redux";
import CartList from "./CartList";
import CartOwner from "./CartOwner";
import EmptyCart from "./EmptyCart";
import { getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="flex flex-col scroll-auto p-4">
      <CartList editType={true} cart={cart} />
      <CartOwner />
    </div>
  );
}

export default Cart;
