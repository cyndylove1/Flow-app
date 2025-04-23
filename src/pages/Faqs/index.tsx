import Container from "../../components/Container";
import useFaqs from "./useFaqs";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";


export default function Faqs() {
  const { accordion, handleAccordionClick } = useFaqs();

  return (
    <div className="lg:pt-[12rem] pt-[14rem]">
      <Container />
      <h2 className="text-7xl text-white text-center gilroy-medium font-[400] pt-2">
        FAQS
      </h2>
      <div className="xl:px-[8rem] px-4 pt-[3rem]">
        {accordion.map((item, index) => (
          <div
            key={item.id}
            className="mb-4 border-b-[1px] border-[#373737] rounded py-6"
          >
            <div className="flex justify-between items-center">
              <h2
                className="text-white cursor-pointer gilroy-medium font-[400] md:text-[30px] text-[20px]"
                onClick={() => handleAccordionClick(index)}
              >
                {item.title}
              </h2>
              <span
                onClick={() => handleAccordionClick(index)}
                className="cursor-pointer text-white text-[35px]"
              >
                {item.isOpen ? <HiMinus /> : <GoPlus />}
              </span>
            </div>
            {item.isOpen && (
              <div className="mt-2 text-gray-300">
                <p></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
