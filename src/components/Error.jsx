import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-2 bg-mist-300">
      <p className="text-lg text-lime-700 md:text-3xl">哎呀出錯了🫣</p>
      <p className=" text-lime-700">{error.data || error.message}</p>
      <Button action={() => navigate(-1)}>回上一頁</Button>
    </div>
  );
}

export default Error;
