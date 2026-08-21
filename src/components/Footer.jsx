function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-lime-900 p-1 md:p-3 text-lime-600 md:flex-row md:gap-4 text-xs md:text-base">
      <div className="flex gap-2">
        <span>健康廣場 &copy; 2026 Kiss Lu.</span>
        <span>Built with React & Tailwind.</span>
      </div>
      <span className="text-lime-600/70 text-center">
        ※
        本網站僅為技術練習與展示，所有食譜、餐點及購物車下單功能皆為虛構模擬資料。
      </span>
    </div>
  );
}

export default Footer;
