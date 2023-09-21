export default function UIUX() {
  return (
    <div className="flex justify-center flex-col items-center gap-20 h-screen">
      <div className="flex gap-10">
        <div className="space-y-5">
          <p className="db-34">Display Black 34</p>
          <p className="db-30">Display Black 30</p>
          <p className="db-24">Display Black 24</p>
          <p className="db-20">Display Black 20</p>
          <p className="db-18">Display Black 18</p>
          <p className="db-16">Display Black 16</p>
          <p className="db-14">Display Black 14</p>
        </div>
        <div className="space-y-5">
          <p className="dm-24">Display Medium 24</p>
          <p className="dm-20">Display Medium 20</p>
          <p className="dm-18">Display Medium 18</p>
          <p className="dm-16">Display Medium 16</p>
          <p className="dm-14">Display Medium 14</p>
        </div>
        <div className="dm-20 text-blue">공유</div>
        <div className="space-y-5">
          <p className="dmn-20">Display Medium 20 (number / 자간0)</p>
          <p className="dmn-16">Display Medium 16 (number / 자간0)</p>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="bg-lightBlack w-20 h-20 text-white">light black</div>
        <div className="bg-gray88 w-20 h-20 text-white">gray88</div>
        <div className="bg-line w-20 h-20 text-lightBlack">line</div>
        <div className="bg-lightGray w-20 h-20 text-lightBlack">light gray</div>
        <div className="bg-beige w-20 h-20 text-lightBlack">beige</div>
        <div className="bg-lightPurple w-20 h-20 text-lightBlack">
          light purple
        </div>
        <div className="bg-sky w-20 h-20 text-lightBlack">sky</div>
        <div className="bg-blue w-20 h-20 text-white">blue</div>
        <div className="bg-red w-20 h-20 text-white">red</div>
      </div>
    </div>
  );
}
