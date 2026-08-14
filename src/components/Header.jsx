function Header() {
  return (
    <header>
      <div>
        <a href="/">健康廣場</a>
      </div>
      <div>
        <div>
          <a href="/menu">美食介紹</a>
          <a href="/doit">復刻美食</a>
          <a href="/cart">購物車</a>
          <a href="/contact">聯絡我們</a>
        </div>
        <div>
          <form>
            <input placeholder="搜尋訂單" />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
