import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex flex-col bg-lime-800 p-3 font-bold text-lime-200 md:tracking-widest lg:flex-row">
      <div className="mx-5 flex flex-row items-center justify-between md:basis-1/3">
        <Link to="/" className="cactus-classical-serif-regular text-3xl">
          健康廣場
        </Link>
      </div>
      <div className="flex flex-col items-center md:basis-2/3 md:flex-row md:justify-end">
        <div className="flex gap-2 py-2 md:gap-10 md:py-0 md:pr-10 md:text-lg">
          <Link to="/menu">美食介紹</Link>
          <Link to="/doit">復刻美食</Link>
          <Link to="/cart">購物車</Link>
          <Link to="/contact">聯絡我們</Link>
        </div>
        <div className="mr-0 md:mr-5">
          <SearchOrder />
        </div>
      </div>
    </header>
  );
}

export default Header;
