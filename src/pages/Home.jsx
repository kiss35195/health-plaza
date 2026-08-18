function Home() {
  return (
    <div className="relative grid h-full w-full grid-rows-2 bg-[url(https://images.unsplash.com/photo-1495606500376-c00663c0f5a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat md:grid-cols-3 md:grid-rows-3">
      <div className="pointer-events-none absolute inset-0 bg-white/15" />
      <div className="row-start-2 flex flex-col items-center justify-center text-sm text-amber-200 md:col-start-3 md:row-start-2 md:text-3xl">
        <p>您也在找尋更健康的飲食方式嗎？</p>
        <p>恭喜您，這裡就有最佳答案</p>
        <button className="my-2 w-fit rounded-full bg-lime-800/70 px-3 py-2 text-lime-200 hover:bg-lime-600/70 md:px-4 md:py-3 md:text-2xl">
          點擊進入
        </button>
      </div>
    </div>
  );
}

export default Home;
