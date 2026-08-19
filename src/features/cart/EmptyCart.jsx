import Button from "../../components/Button";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
      <p className="text-4xl md:text-6xl">🛒</p>
      <p className="text-xl">購物車空空的 🥲</p>
      <Button to="/menu" customClass="my-2 w-fit">
        挑選商品去
      </Button>
    </div>
  );
}

export default EmptyCart;
