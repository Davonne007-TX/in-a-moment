import GrubSubscribe from "./GrubSubscribe";

export default function GrubFooter() {
  return (
    <footer>
      <div className="w-full mx-auto bg-[#1B1212] p-10">
        <div className="flex justify-between p-2 py-10">
          <h3 className="text-3xl md:text-5xl cursor-pointer font-bow text-[#FF6B4A]">
            Let's Grub
          </h3>

          <p className="text-3xl md:text-xl font-bow text-[#FF6B4A]">
            It's Summer, it's time to go to the beach
            <br />
            and get our grub on!
          </p>
        </div>

        <div
          style={{ height: "1px", backgroundColor: "#000000", width: "100%" }}
        ></div>

        <GrubSubscribe />
      </div>
    </footer>
  );
}
