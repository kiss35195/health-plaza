import { useState } from "react";
import { useDispatch } from "react-redux";
import { delItem, incItem, decItem } from "./cartSlice";
import Serving from "../../components/Serving";

function CartItem({ item, recipe, editType = false, useClass }) {
  const [serving, setServing] = useState(item.quantity);
  const dispatch = useDispatch();

  function handleDec(id) {
    setServing((s) => s - 1);
    dispatch(decItem(id));
  }
  function handleInc(id) {
    setServing((s) => s + 1);
    dispatch(incItem(id));
  }
  function handleDel(id) {
    dispatch(delItem(id));
  }

  return (
    <li className={`grid items-center gap-4 p-2 text-center ${useClass}`}>
      {editType && <button onClick={() => handleDel(recipe.id)}>❌</button>}
      <img
        className="hidden h-30 w-30 object-cover md:block"
        src={recipe.img}
        decoding="async"
      ></img>
      <p>{recipe.recipeName}</p>
      {!editType && <p className="text-right">x{item.quantity}</p>}
      {editType && (
        <Serving
          serving={serving}
          onDec={() => handleDec(recipe.id)}
          onInc={() => handleInc(recipe.id)}
        />
      )}
      <p className="text-right">{recipe.price}元</p>
      <p className={`text-right ${recipe.limitPrice > 0 && "font-bold"}`}>
        {recipe.limitPrice > 0
          ? recipe.limitPrice * item.quantity
          : recipe.price * item.quantity}
        元
      </p>
    </li>
  );
}

export default CartItem;
