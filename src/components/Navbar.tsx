
import { useState } from "react";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-[30px] overflow-hidden">
      {/* Large Screen Navbar */}
      <div className="hidden md:flex items-center justify-center bg-[#181818] w-[633px] h-[80px] rounded-[60px] mx-auto gap-[40px]">
        <span>
          {/* Logo SVG */}
          <svg
            width="78"
            height="24"
            viewBox="0 0 78 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_701_16903)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8.70638H8.07695L16.1539 16.3532H8.07695H0V8.70638Z"
                fill="#136FC5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 16.3531H8.07695V24L0 16.3531Z"
                fill="#1321C5"
              />
              <path
                d="M16.1539 -3.43323e-05H0V7.64678H16.1539V-3.43323e-05Z"
                fill="#124EC5"
              />
              <path
                d="M32.5547 5.56861H24.4196V10.3135H32.3222V14.0866H24.4196V21.8042H20.4102V1.7955H32.5547V5.56861Z"
                fill="white"
              />
              <path
                d="M34.7529 21.8042V1.79549H38.501V21.8042H34.7529Z"
                fill="white"
              />
              <path
                d="M53.7447 20.0178C52.2533 21.4756 50.4326 22.2045 48.2826 22.2045C46.1326 22.2045 44.3167 21.4756 42.835 20.0178C41.3532 18.56 40.6123 16.7734 40.6123 14.6583C40.6123 12.543 41.3532 10.7566 42.835 9.29874C44.3167 7.84105 46.1326 7.11215 48.2826 7.11215C50.4326 7.11215 52.2533 7.84105 53.7447 9.29874C55.2361 10.7566 55.9819 12.5431 55.9819 14.6583C55.9819 16.7735 55.2361 18.56 53.7447 20.0178ZM45.4789 17.4881C46.2246 18.2313 47.1592 18.6028 48.2826 18.6028C49.406 18.6028 50.3454 18.2313 51.1008 17.4881C51.8562 16.745 52.2338 15.8016 52.2338 14.6583C52.2338 13.5149 51.8562 12.5717 51.1008 11.8285C50.3454 11.0853 49.406 10.7137 48.2826 10.7137C47.1592 10.7137 46.2246 11.0853 45.4789 11.8285C44.7331 12.5717 44.3603 13.5149 44.3603 14.6583C44.3603 15.8016 44.7331 16.745 45.4789 17.4881Z"
                fill="white"
              />
              <path
                d="M74.4018 7.51235H77.9997L73.7627 21.8042H70.0874L67.3417 13.1433L64.5913 21.8042H60.9208L56.6499 7.51235H60.6109L63.0999 16.2875L65.7438 7.51235H69.2932L71.9371 16.3162L74.4018 7.51235Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_701_16903">
                <rect width="78" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <ul className="text-white flex items-center gap-[31px] gilroy-regular text-[16px] font-[400]">
          <li>About</li>
          <li>Feature</li>
          <ScrollLink
            to="faqs"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <li>FAQS</li>
          </ScrollLink>
          <li>DrawBox</li>
        </ul>
        <Button className="h-[50px] w-[136px] text-[15px]" text="Download" />
      </div>

      {/* Small Screen Navbar */}
      <div className="md:hidden px-4">
        <div className="flex justify-between items-center bg-[#181818] h-[80px] rounded-[60px] px-4 py-3">
          {/* Logo */}
          <span>
            <svg
              width="78"
              height="24"
              viewBox="0 0 78 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_701_16903)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 8.70638H8.07695L16.1539 16.3532H8.07695H0V8.70638Z"
                  fill="#136FC5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 16.3531H8.07695V24L0 16.3531Z"
                  fill="#1321C5"
                />
                <path
                  d="M16.1539 -3.43323e-05H0V7.64678H16.1539V-3.43323e-05Z"
                  fill="#124EC5"
                />
                <path
                  d="M32.5547 5.56861H24.4196V10.3135H32.3222V14.0866H24.4196V21.8042H20.4102V1.7955H32.5547V5.56861Z"
                  fill="white"
                />
                <path
                  d="M34.7529 21.8042V1.79549H38.501V21.8042H34.7529Z"
                  fill="white"
                />
                <path
                  d="M53.7447 20.0178C52.2533 21.4756 50.4326 22.2045 48.2826 22.2045C46.1326 22.2045 44.3167 21.4756 42.835 20.0178C41.3532 18.56 40.6123 16.7734 40.6123 14.6583C40.6123 12.543 41.3532 10.7566 42.835 9.29874C44.3167 7.84105 46.1326 7.11215 48.2826 7.11215C50.4326 7.11215 52.2533 7.84105 53.7447 9.29874C55.2361 10.7566 55.9819 12.5431 55.9819 14.6583C55.9819 16.7735 55.2361 18.56 53.7447 20.0178ZM45.4789 17.4881C46.2246 18.2313 47.1592 18.6028 48.2826 18.6028C49.406 18.6028 50.3454 18.2313 51.1008 17.4881C51.8562 16.745 52.2338 15.8016 52.2338 14.6583C52.2338 13.5149 51.8562 12.5717 51.1008 11.8285C50.3454 11.0853 49.406 10.7137 48.2826 10.7137C47.1592 10.7137 46.2246 11.0853 45.4789 11.8285C44.7331 12.5717 44.3603 13.5149 44.3603 14.6583C44.3603 15.8016 44.7331 16.745 45.4789 17.4881Z"
                  fill="white"
                />
                <path
                  d="M74.4018 7.51235H77.9997L73.7627 21.8042H70.0874L67.3417 13.1433L64.5913 21.8042H60.9208L56.6499 7.51235H60.6109L63.0999 16.2875L65.7438 7.51235H69.2932L71.9371 16.3162L74.4018 7.51235Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_701_16903">
                  <rect width="78" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>

          {/* Hamburger Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="bg-[#181818] h-screen left-0 right-0 mt-2 rounded-lg px-4 py-3 text-white flex flex-col gap-4 text-[16px] font-[400] gilroy-regular">
            <ul className="pt-6">
              <li className="py-2">About</li>
              <li className="py-2">Feature</li>
              <ScrollLink
                to="faqs"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <li className="py-2">FAQS</li>
              </ScrollLink>

              <li className="py-2">DrawBox</li>
            </ul>
            <Button className="w-full h-[45px] text-[14px]" text="Download" />
          </div>
        )}
      </div>
    </div>
  );
}
