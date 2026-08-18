import Serving from "../../components/Serving";

function CartItem({ item, recipe, editType, useClass }) {
  return (
    <li className={`grid items-center gap-4 p-2 text-center ${useClass}`}>
      {editType && <button>❌</button>}
      <img
        className="hidden h-30 w-30 object-cover md:block"
        src={recipe.img}
      ></img>
      <p>{recipe.recipeName}</p>
      {!editType && <p className="text-right">x{item.quantity}</p>}
      {editType && <Serving />}
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
