function SearchOrder() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="搜尋訂單"
        className="rounded-full bg-lime-200 px-3 py-2 text-lime-700"
      />
    </form>
  );
}

export default SearchOrder;
