import CartItem from "./CartItem";

const editClass =
  "grid-cols-[0.5fr_2fr_2fr_1fr_1fr] md:grid-cols-[0.5fr_1fr_2fr_2fr_0.5fr_1fr]";
const readClass =
  "grid-cols-[2fr_2fr_1fr_1fr] md:grid-cols-[1fr_2fr_0.5fr_0.5fr_1fr]";
const sumClass = `grid items-center gap-4 border-t border-lime-700 p-2 text-center 
    grid-cols-2`;

function CartList({ editType, recipes, cart }) {
  const summaryPrice = cart.reduce(
    (sum, item) =>
      sum +
      recipes.find((recipe) => recipe.id === item.id).price * item.quantity,
    0,
  );

  const limitPrice = cart.reduce((sum, item) => {
    const recipe = recipes.find((recipe) => recipe.id === item.id);
    return (
      sum +
      (recipe.limitPrice > 0
        ? recipe.limitPrice * item.quantity
        : recipe.price * item.quantity)
    );
  }, 0);

  const totalPrice = limitPrice > 999 ? limitPrice : limitPrice + 60;

  return (
    <div>
      <div
        className={`grid items-center gap-4 border-b border-b-lime-700 p-2 text-center ${editType ? editClass : readClass}`}
      >
        {editType && <div>刪除</div>}
        <div className="hidden w-30 md:block">圖片</div>
        <div>名稱</div>
        <div className={editType ? "text-center" : "text-right"}>數量</div>
        <div className="text-right">單價</div>
        <div className="text-right">金額</div>
      </div>
      <ul className="divide-y divide-lime-700">
        {cart.map((item) => {
          const recipe = recipes.find((recipes) => recipes.id === item.id);
          return (
            <CartItem
              key={item.id}
              item={item}
              recipe={recipe}
              editType={editType}
              useClass={editType ? editClass : readClass}
            />
          );
        })}
      </ul>
      <div className={sumClass}>
        <div>小計</div>
        <div
          className={`text-right ${limitPrice !== summaryPrice && "font-bold"} `}
        >
          {limitPrice !== summaryPrice ? limitPrice : summaryPrice}元
        </div>
      </div>
      <div className={sumClass}>
        <div>含運費總計(滿千免運)</div>
        <div className="text-right">{totalPrice}元</div>
      </div>
    </div>
  );
}

export default CartList;
