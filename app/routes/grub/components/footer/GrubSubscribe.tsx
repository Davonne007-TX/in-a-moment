export default function GrubSubscribe() {
  return (
    <section className="my-8  flex flex-col gap-4">
      <h1 className="text-lg text-[#8B5E55]">Subscribe for Ultimate Offers </h1>

      <div className="flex gap-4">
        <input
          className="text border border-black outline-none w-60 md:w-80 h-10 rounded-md p-2"
          placeholder="Enter E-mail Address"
        />
        <button className="border border-black p-2 text-black rounded-md cursor-pointer hover:text-white hover:bg-[#FF6B4A]">
          ➪
        </button>
      </div>
    </section>
  );
}
