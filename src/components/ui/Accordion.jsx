import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Accordion({ title, children, status }) {
  const [isOpenAccordion, setIsOpenAccordion] = useState(status ?? false);

  return (
    <div className="grid gap-3 py-4 border-b-2 border-cod-gray-100">
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold tracking-widest">{title}</p>
        <MdOutlineKeyboardArrowDown
          onClick={() => setIsOpenAccordion(!isOpenAccordion)}
          className={"w-6 h-auto transition-transform ".concat(
            isOpenAccordion ? " rotate-180" : " rotate-0"
          )}
        />
      </div>
      <div
        className={"transition ".concat(
          isOpenAccordion ? "grid gap-3" : "hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
