import Button from "../../components/Button";

const labelClass = "self-center text-right mr-2";
const inputClass =
  "input rounded-full bg-lime-200 px-3 py-2 text-lime-600 w-full";

function CartOwner() {
  function handleSubmit(e) {
    e.preventDefault();
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
        />

        <label className={labelClass}>宅配地址</label>
        <input
          type="text"
          name="address"
          required
          placeholder="必填"
          className={inputClass}
        />
      </div>
      <div className="flex w-full justify-end">
        <Button customClass="mr-2">送出訂單</Button>
      </div>
    </form>
  );
}

export default CartOwner;
