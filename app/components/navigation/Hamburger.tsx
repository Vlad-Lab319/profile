import React from "react";

const Hamburger = () => {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        id="menu-toggle"
        defaultChecked={false}
        className="peer fixed m-o p-0 top-1 right-2 w-8 h-8 z-50 opacity-0 cursor-pointer"
      />
      <span className="block w-8 h-1 mb-2 absolute top-3 right-2 bg-slate-100 rounded-sm origin-center peer-checked:rotate-45 peer-checked:origin-[-1px_8px] peer-checked:w-6 z-40 peer-checked:bg-sky-600"></span>
      <span className="block w-8 h-1 mb-2 absolute top-6 right-2 bg-sky-600 rounded-sm origin-[0%_0%] peer-checked:opacity-0 z-40"></span>
      <span className="block w-8 h-1 mb-2 absolute top-9 right-2 bg-slate-100 rounded-sm origin-[0%_100%] peer-checked:-rotate-45 peer-checked:origin-[-4px_-5px] z-40 peer-checked:bg-sky-600 peer-checked:w-6"></span>
    </React.Fragment>
  );
};

export default Hamburger;
