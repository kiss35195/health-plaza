import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart, clearCart } from "./cartSlice";
import Button from "../../components/Button";
import { createOrder } from "../../services/apiHealthPlaza";

const labelClass = "self-center text-right mr-2";
const inputClass =
  "input rounded-full bg-lime-200 px-3 py-2 text-lime-600 w-full";

function CartOwner() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !phone || !address) return;

    try {
      setIsSubmitting(true);

      const now = new Date();
      const formatter = new Intl.DateTimeFormat("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const formattedDate = formatter.format(now);

      const newOrder = {
        orderName: name,
        phone,
        address,
        createDateTime: formattedDate,
        detail: cart,
      };

      const data = await createOrder(newOrder);
      if (data && data.id) {
        dispatch(clearCart());
        navigate(`/order/${data.id}`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <form
      className="my-7 rounded-2xl bg-lime-100/70 py-2"
      onSubmit={handleSubmit}
    >
      <div className="m-2 grid grid-cols-[auto_1fr] gap-2 md:grid-cols-[auto_1fr_auto_1fr]">
        <label className={labelClass}>訂購者姓名</label>
        <input
          type="text"
          name="customer"
          required
          placeholder="必填"
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className={labelClass}>聯絡電話</label>
        <input
          type="tel"
          name="phone"
          pattern="^09\d{8}$"
          required
          maxLength={10}
          placeholder="e.g. 0987654321"
          className={inputClass}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className={labelClass}>宅配地址</label>
        <input
          type="text"
          name="address"
          required
          placeholder="必填"
          className={inputClass}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="flex w-full justify-end">
        <Button customClass="mr-2" disabled={isSubmitting}>
          {isSubmitting ? "下單中..." : "送出訂單"}
        </Button>
      </div>
      <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
    </form>
  );
}

export default CartOwner;
