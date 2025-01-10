"use client";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  const typeStrings = [
    "Hello",
    "Thank you for visiting my site",
    "I am a full-stack developer",
    "In my projects I can use a broad range of technologies",
    "If you did not find one you are looking for, don't hesitate to ask me if I forgot to put that in my list ))",
  ];

  return (
    <div className="text-slate-200 text-xl landscape:text-lg landscape:lg:text-3xl">
      <Typewriter
        options={{
          strings: typeStrings,
          autoStart: true,
          loop: true,
          delay: 200,
        }}
      />
    </div>
  );
};

export default TypeWriter;
