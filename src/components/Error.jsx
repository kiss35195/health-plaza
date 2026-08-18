import Button from "./Button";

function Error() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-2 bg-mist-300">
      <p className="text-lg text-lime-700 md:text-3xl">哎呀出錯了🫣</p>
      <Button>回上一頁</Button>
    </div>
  );
}

export default Error;
