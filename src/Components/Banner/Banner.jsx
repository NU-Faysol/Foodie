import backgroundImage from "../../assets/images/chef.png";
const Banner = () => {
  return (
    // 1320, h-600

    <div
      className="mx-auto rounded-2xl my-20 flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        width: "1120px",
      }}
    >
      <div
        className="grid gap-10"
        style={{
          width: "800px",
          height: "241px",
        }}
      >
        <p className="text-white text-5xl font-bold">
          Discover an exceptional cooking class tailored for you!
        </p>
        <p className="text-white">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex justify-evenly">
          <button className="bg-green-400 rounded-full py-3 px-5 font-bold text-white">
            Explore Now
          </button>
          <button className="text-white py-3 px-5 font-bold border-black-100">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
