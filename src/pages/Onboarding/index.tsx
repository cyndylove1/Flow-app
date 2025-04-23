import Container from "../../components/Container";
import component from "../../assets/Component 1.png"


export default function Onboarding() {
  return (
    <>
      <div className="lg:pt-[12rem] pt-[14rem]">
        <Container />

        <div className="text-center">
          <h2 className="font-[400] gilroy-medium text-5xl md:text-7xl text-white pt-2 pb-6">
            Wait We’ve Got <br /> More For You
          </h2>
          <h6 className="md:text-[25px] px-2 md:px-0 text-[20px] text-[#9E9E9E] gilroy-light text-center font-[400] lg:pb-20">
            Get started in minutes with our smooth and user-friendly <br /> {" "}
            onboarding process. No complicated steps, just a seamless <br /> {" "}
            experience.
          </h6>
        </div>

        <div className="flex justify-center mt-14">
          <img src={component} alt=""  />
        </div>
      </div>
    </>
  );
}
