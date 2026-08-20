import { useLoaderData } from "react-router-dom";
import CartList from "../cart/CartList";
// import { getOrder } from "../../services/apiHealthPlaza";

function Order() {
  const order = useLoaderData();
  const createDate = new Date(order.createDateTime.replace(/\//g, "-"));
  const oneDayAfter = new Date(createDate);
  oneDayAfter.setDate(oneDayAfter.getDate() + 1);
  const now = new Date();
  const isDelivered = now > oneDayAfter;

  return (
    <div className="p-4">
      <div className="flex flex-col justify-between md:flex-row-reverse md:items-center">
        <p
          className={`w-fit rounded-2xl px-3 py-2 text-white ${isDelivered ? "bg-green-500" : "bg-red-500"}`}
        >
          {isDelivered ? "已送達" : "處理中"}
        </p>
        <div>
          <p>訂單編號 #{order.id}</p>
          <p>下訂時間: {order.createDateTime}</p>
        </div>
      </div>
      <CartList editType={false} cart={order.detail} />
    </div>
  );
}

// 2026/08/20 搬到App處理 by kiss
// export async function loader({ params }) {
//   const data = await getOrder(params.orderId);
//   return data;
// }

export default Order;
