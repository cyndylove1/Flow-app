import Button from "../../components/Button";
import Container from "../../components/Container";
import frame4 from "../../assets/Frame4.png";


export default function Earnings() {
  return (
    <>
      <div className="lg:pt-[12rem] pt-[18rem]">
        <Container />

        <div className="text-center">
          <h2 className="font-[400] md:text-7xl text-5xl text-white gilroy-medium pt-2 pb-6">
            Your Earnings, <br /> One Tap Away
          </h2>
          <h6 className="lg:text-[25px] text-[20px] text-[#9E9E9E] px-2 md:px-0 gilroy-light text-center font-[400]">
            Manage your payouts and stay in control, right from your <br />
            phone. Download the app now!
          </h6>
        </div>
        <div className="flex justify-center mt-10">
          <Button
            className="h-[60px]"
            text="Download App"
          />
        </div>

        <div className="flex justify-center">
          <img src={frame4} alt="" />
        </div>
      </div>
    </>
  );
}
