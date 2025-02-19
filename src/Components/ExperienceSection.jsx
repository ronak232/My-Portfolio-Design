const ExperienceSection = () => {
  return (
    <div className="exp-banner py-[4rem]">
      <div className="container h-full">
        <div className="flex flex-col">
          <h1 className="gradient-text md:text-5xl text-3xl font-semibold">
            Experience
          </h1>

          <p className="text-gray-800 py-4 font-normal font-basic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, eius aspernatur et aperiam recusandae adipisci quis
            dolores sint assumenda cumque praesentium? Eius quam iure rem
            necessitatibus dignissimos aliquam accusantium quos!
          </p>
          <div className="flex gap-4 flex-wrap md:flex-nowrap w-full text-black">
            <div className="max-w-[400px] justify-center w-full">
              <div className="flex flex-col gap-5 bg-white py-5 rounded-xl shadow-cs cursor-pointer border p-4">
                <img
                  className=""
                  width={20}
                  height={20}
                  src="./images/career-icon.png"
                  alt=""
                />
                <p className="">2022 - Present</p>
                <h1 className="text-n-5 font-semibold text-[1.9rem]">
                  Frontend Developer
                </h1>
                <ul>
                  <li className="leading-[1.3rem] text-[1rem]  font-basic font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, omnis officiis ad autem nobis ducimus.
                  </li>
                </ul>
                <p className="font-basic font-light">Tech Stack</p>
                <div className="flex justify-between items-center w-full p-2">
                  <div className="border-0 rounded-full shadow-cs p-2">
                    <img
                      className="max-w-[30px]"
                      src="./images/icons/css-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="border-0 rounded-full shadow-cs p-2">
                    <img
                      className="max-w-[30px]"
                      src="./images/icons/html-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="border-0 rounded-full shadow-cs p-2">
                    <img
                      className="max-w-[30px]"
                      src="./images/icons/js-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="border-0 rounded-full shadow-cs p-2">
                    <img
                      className="max-w-[30px]"
                      src="./images/icons/react-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="border-0 rounded-full shadow-cs p-2">
                    <img
                      className="max-w-[30px]"
                      src="./images/icons/sass-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="border-0 rounded-full shadow-cs p-2">
                    <img
                      className="max-w-[30px]"
                      src="./images/icons/git-icon.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ExperienceSection;
