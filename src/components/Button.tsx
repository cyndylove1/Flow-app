interface ButtonProps{
  className?: string
  text?: string
}
export default function Button({className, text}: ButtonProps) {
    return (
      <>
        <button
          className={`bg-[#124ec5] rounded-[50px]  border-[2px] border-[#136FC5] py-[15px] px-[20px] flex items-center justify-center gap-[5px] ${className}`}
        >
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.1665 7.5C4.1665 4.75014 4.1665 3.37521 5.02078 2.52094C5.87505 1.66667 7.24998 1.66667 9.99984 1.66667C12.7497 1.66667 14.1246 1.66667 14.9789 2.52094C15.8332 3.37521 15.8332 4.75014 15.8332 7.5V12.5C15.8332 15.2498 15.8332 16.6248 14.9789 17.4791C14.1246 18.3333 12.7497 18.3333 9.99984 18.3333C7.24998 18.3333 5.87505 18.3333 5.02078 17.4791C4.1665 16.6248 4.1665 15.2498 4.1665 12.5V7.5Z"
                stroke="white"
                stroke-width="1.25"
                stroke-linecap="round"
              />
              <path
                d="M9.1665 15.8333H10.8332"
                stroke="white"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 1.66667L7.57417 2.11168C7.7349 3.07608 7.81527 3.55828 8.14599 3.8517C8.491 4.15778 8.98008 4.16667 10 4.16667C11.0199 4.16667 11.509 4.15778 11.854 3.8517C12.1847 3.55828 12.2651 3.07608 12.4258 2.11168L12.5 1.66667"
                stroke="white"
                stroke-width="1.25"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h2 className="text-[15px] font-[400] gilroy-medium text-white leading-[100px]">
            {text}
          </h2>
        </button>
      </>
    );
}