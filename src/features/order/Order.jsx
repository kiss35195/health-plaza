import CartList from "../cart/CartList";

// 假資料
const recipes = [
  {
    id: "159EV",
    recipeName: "香煎雞胸佐藜麥蔬菜碗",
    introduce: "滿滿蛋白質，健人最愛款!",
    ingredients: [
      {
        name: "雞胸肉",
        weight: 150,
        unit: "g",
      },
      {
        name: "熟藜麥",
        weight: 80,
        unit: "g",
      },
      {
        name: "綠花椰菜",
        weight: 100,
        unit: "g",
      },
      {
        name: "小番茄",
        weight: 50,
        unit: "g",
      },
      {
        name: "橄欖油",
        weight: 5,
        unit: "ml",
      },
      {
        name: "鹽與黑胡椒",
        weight: 1,
        unit: "g",
      },
    ],
    price: 200,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    limitToday: true,
  },
  {
    id: "6F4G8",
    recipeName: "雙菇蔬菜拼盤",
    introduce: "雞胸肉吃膩了，換換口味~",
    ingredients: [
      {
        name: "杏鮑菇",
        weight: 100,
        unit: "g",
      },
      {
        name: "黑木耳",
        weight: 80,
        unit: "g",
      },
      {
        name: "玉米筍",
        weight: 60,
        unit: "g",
      },
      {
        name: "綠花椰菜",
        weight: 100,
        unit: "g",
      },
      {
        name: "醬油",
        weight: 10,
        unit: "ml",
      },
      {
        name: "醋",
        weight: 5,
        unit: "ml",
      },
    ],
    price: 150,
    img: "https://images.unsplash.com/photo-1696540008951-a8d91e11ceb4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEtpbmclMjBveXN0ZXIlMjBtdXNocm9vbSUyMGRpc2h8ZW58MHx8MHx8fDI%3D",
    limitPrice: 120,
  },
  {
    id: "BH979",
    recipeName: "豆腐炒鮮菇時蔬",
    introduce: "誰說素食不均衡?這樣吃很可以",
    ingredients: [
      {
        name: "板豆腐",
        weight: 150,
        unit: "g",
      },
      {
        name: "鮮香菇",
        weight: 80,
        unit: "g",
      },
      {
        name: "青椒",
        weight: 100,
        unit: "g",
      },
      {
        name: "胡蘿蔔",
        weight: 30,
        unit: "g",
      },
      {
        name: "橄欖油",
        weight: 5,
        unit: "ml",
      },
      {
        name: "醬油",
        weight: 10,
        unit: "ml",
      },
    ],
    price: 180,
    img: "https://images.unsplash.com/photo-1603093667424-09da9c2e578c?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const order = {
  id: "123",
  orderName: "test",
  phone: "0912345678",
  address: "abc street",
  createDateTime: "2026/01/01 17:56:39",
  detail: [
    {
      id: "159EV",
      price: 200,
      quantity: 1,
    },
    {
      id: "6F4G8",
      price: 120,
      quantity: 5,
    },
  ],
};

function Order() {
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
      <CartList editType={false} recipes={recipes} cart={order.detail} />
    </div>
  );
}

export default Order;
