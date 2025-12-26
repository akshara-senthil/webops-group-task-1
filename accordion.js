import { useState } from "react";
import { ChevronDown } from "lucide-react";


export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);


  const items = [
    {
      title: "Q1",
      content:
        "A1",
    },
    {
      title: "Q2",
      content:
        "A2",
    },
    {
      title: "Q3",
      content:
        "A3",
    },
  ];


  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="mx-auto max-w-xl space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border bg-white shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
          >
            {item.title}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>


          {openIndex === index && (
            <div className="px-4 pb-4 text-sm text-gray-600">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


