function ProductHeader() {
  return (
    <header className="h-20 w-full px-3 py-5 flex items-center">
      <section className="w-32 h-full flex items-center">
        <img src="../../img/Untitled.png" className="object-cover" alt="logo" />
      </section>
      <section className="flex-1 ml-5 mr-16 h-full flex items-center">
        <input className="w-full outline-none px-2 py-1 border border-search focus:border-sky-500 duration-150" />
      </section>
      <button className="flex items-center p-2 h-min bg-header hover:bg-header/90 duration-150">
        <img
          src="../../img/caculator.png"
          className="object-cover w-5 h-5"
          alt="caculator"
        />
      </button>
    </header>
  );
}
export default ProductHeader;
