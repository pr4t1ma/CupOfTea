import { FC, useState } from "react";
type AccordianProp = {
  heading: string;
  text: string;
};

const Accordian: FC<AccordianProp> = ({ heading, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto border border-gray-200 p-5 my-20">
      <div className="flex justify-between">
        <h1>{heading}</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          +
        </button>
      </div>

      {isOpen && <p className="my-2 line-clamp-2 text-2xl">{text}</p>}
    </div>
  );
};

export default Accordian;
