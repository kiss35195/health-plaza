import { useState } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { updItem } from "../cart/cartSlice";
import Button from "../../components/Button";
import Serving from "../../components/Serving";

const limitClass =
  "text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-600 to-red-100/20 [background-size:200%_100%] [animation:text-reveal_2s_infinite_linear]";

function MenuItem({ recipe, page }) {
  const [serving, setServing] = useState(1);
  const dispatch = useDispatch();
  const { triggerToast } = useOutletContext();

  function handleDec() {
    if (serving === 1) return;
    setServing((s) => s - 1);
  }
  function handleInc() {
    if (page === "doit" && serving === 10) return;
    setServing((s) => s + 1);
  }
  function handleUpd() {
    const newItem = {
      id: recipe.id,
      price: recipe.limitPrice > 0 ? recipe.limitPrice : recipe.price,
      quantity: serving,
    };
    dispatch(updItem(newItem));
    setServing(1);
    triggerToast("加入購物車成功", true);
  }

  return (
    <li className="mt-2 flex w-full flex-col md:mt-0 md:flex-row">
      <div className="flex basis-1/2 flex-col items-end">
        <img
          className="h-70 w-70 object-cover"
          src={recipe.img}
          loading="lazy"
          decoding="async"
        ></img>
        <p className="mt-1 text-xs text-gray-500">
          圖片來源：
          <a
            href="https://unsplash.com"
            target="_blank"
            className="underline hover:text-blue-500"
          >
            Unsplash
          </a>
        </p>
      </div>
      <div className="basis-1/2 p-2 text-center">
        <>
          {recipe.limitToday && (
            <>
              <span>🔥</span>
              <span className={limitClass}>
                今日限定{page === "menu" ? "菜單" : "商品"}
              </span>
            </>
          )}
          {recipe.limitPrice && (
            <>
              <span>🔥</span>
              <span className={limitClass}>今日限定優惠</span>
            </>
          )}
          <p className="mb-1 text-2xl font-semibold">{recipe.recipeName}</p>
          <div className="flex h-full flex-col">
            {page === "menu" && (
              <p className="py-2 md:py-5">{recipe.introduce}</p>
            )}
            <div>
              <Serving
                serving={serving}
                unit={page === "doit" ? "份" : ""}
                onDec={handleDec}
                onInc={handleInc}
              />
              {page === "menu" && (
                <Button action={handleUpd}>加到購物車</Button>
              )}
              {page === "doit" &&
                recipe.ingredients.map((ingredient, i) => (
                  <p className="pl-2" key={i}>
                    {ingredient.name} {ingredient.weight * serving}
                    {ingredient.unit}
                  </p>
                ))}
            </div>
          </div>
        </>
      </div>
    </li>
  );
}

export default MenuItem;
