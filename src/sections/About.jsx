import Card from "../components/Card";

const About = () => {
  return (
    <section className="c-space section-space">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/*Grid 1*/}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="image of code in 3d"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            {" "}
            <p className="headtext">Hello Im Samuel</p>
            <p className="subtext">
              Backend developer with extensive experience in, C++, Python and
              JavaScript, specializing in scalable APIs and
              microservices.optimizing database architectures and real-time data
              pipelines for high-performance applications. Passionate about
              clean code, I deliver secure and efficient solutions.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none-botton-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/*Grid 2*/}
        <div className=" grid-default-color grid-2">
          <div className="flex items-center justify-center w-full h-full ">
            {" "}
            <p className="flex items-end text-5xl text-gray-500">
              Coding is Art
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
            />
            <Card
              style={{ rotate: "90deg", bottom: "60%", left: "70%" }}
              text="Design PattersP"
            />
            <Card
              style={{ rotate: "-45deg", bottom: "55%", left: "0%" }}
              text="Design Principles"
            />
            <Card
              style={{ rotate: "20deg", bottom: "10%", left: "30%" }}
              text="SRP"
            />
            <Card
              style={{ rotate: "30deg", bottom: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
            />
            <Card
              style={{ rotate: "-45deg", bottom: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
            />
            <Card
              style={{ rotate: "-45deg", bottom: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
            />
          </div>
        </div>
        {/*Grid 3*/}
        <div className=" grid-black-color grid-3"></div>
        {/*Grid 4*/}
        <div className=" grid-special-color grid-4"></div>
        {/*Grid 5*/}
        <div className=" grid-default-color grid-5">test </div>
      </div>
    </section>
  );
};

export default About;
