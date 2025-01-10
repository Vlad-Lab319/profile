import type { Metadata } from "next";
import Stack from "./components/home/Stack";
import TypeWriter from "./components/home/TypeWriter";
import dynamic from "next/dynamic";

// const Stack = dynamic(() => import("./components/home/Stack"), {
//   ssr: false, // This ensures the component is not SSR'd
// });

export default function IndexPage() {
  return (
    <div className="h-full w-full pt-16 landscape:pt-8 grid grid-cols-1 grid-rows-2 landscape:grid-cols-2 landscape:grid-rows-1 gap-4 items-center">
      <aside className="h-full w-full max-h-fit p-4 lg:pt-52 col-start-1 grid grid-col-1 overflow-hidden">
        <div>
          <h2 className="text-slate-200 text-3xl landscape:text-2xl lg:text-8xl landscape:lg:text-8xl font-extrabold uppercase">
            Never Stop
          </h2>
          <h3 className="text-slate-200 text-2xl landscape:text-xl lg:text-6xl landscape:lg:text-6xl font-extrabold uppercase">
            Exploring The World
          </h3>
        </div>
        <div className="">
          <TypeWriter />
        </div>
      </aside>
      <div className="w-full h-full row-start-2 landscape:col-start-2 landscape:row-start-1">
        <Stack />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Vladcoder",
};
