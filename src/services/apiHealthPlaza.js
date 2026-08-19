const API_URL = "http://localhost:8000";

export async function getRecipes() {
  try {
    const res = await fetch(`${API_URL}/recipes`);

    if (!res.ok) throw Error("getRecipes error");

    const data = await res.json();
    return data;
  } catch (err) {
    throw Error("取得食譜發生錯誤", { cause: err });
  }
}

export async function getOrder(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);

    if (!res.ok) throw Error("getOrder error");

    const data = await res.json();
    return data;
  } catch (err) {
    throw Error("取得訂單發生錯誤", { cause: err });
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw Error("createOrder error");

    const data = await res.json();
    return data;
  } catch (err) {
    throw Error("建立訂單發生錯誤", { cause: err });
  }
}
