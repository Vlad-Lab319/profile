import useWindowDimensions from "@/lib/hooks/useWindowDimensions";
import Overbracket from "./Overbrackets";
import Brackets from "./Brackets";

const ContactInfo = () => {
  // const { height, width } = useWindowDimensions();

  let wh = 40;
  let ww = {
    website: 480,
    linkedin: 480,
    x: 480,
    instagram: 480,
    email: 800,
  };

  // if (width < 450) {
  //   ww["website"] = 400;
  //   ww["linkedin"] = 480;
  //   ww["x"] = 400;
  //   ww["instagram"] = 400;
  //   ww["email"] = 800;
  // } else if (width < 800) {
  //   ww["website"] = 380;
  //   ww["linkedin"] = 320;
  //   ww["x"] = 360;
  //   ww["instagram"] = 380;
  //   ww["email"] = 720;
  // } else {
  //   ww["website"] = 480;
  //   ww["linkedin"] = 480;
  //   ww["x"] = 420;
  //   ww["instagram"] = 480;
  //   ww["email"] = 720;
  // }

  // if (height < 450) {
  //   wh = 40;
  //   ww["website"] = 420;
  //   ww["linkedin"] = 420;
  //   ww["x"] = 420;
  //   ww["instagram"] = 240;
  //   ww["email"] = 480;
  // } else {
  //   wh = 60;
  // }

  return (
    <div className="w-full h-full m-0 pt-8 px-4 max-h-[calc(100vh/3*2)] landscape:max-h-[calc(100vh-100vh/6)] grid grid-rows-11 grid-cols-23 items-center justify-center text-center text-lg">
      <p className="h-full m-0 p-0 row-start-1 col-start-12 col-span-12 flex items-end justify-center text-sm">
        Website
      </p>
      <div className="h-full w-full row-start-2 col-start-12 col-span-12 flex items-center">
        <Overbracket width={ww.website} height={wh} />
      </div>
      <p className="h-full w-full row-start-3 col-start-1 col-span-9 flex items-end justify-center text-sm">
        LinkedIn
      </p>
      <div className="h-full w-full row-start-4 col-start-1 col-span-9 flex items-center justify-center">
        <Overbracket width={ww.linkedin} height={wh} />
      </div>

      <span className="row-start-5 col-start-1">v</span>
      <span className="row-start-5 col-start-2">e</span>
      <span className="row-start-5 col-start-3">r</span>
      <span className="row-start-5 col-start-4">e</span>
      <span className="row-start-5 col-start-5">m</span>
      <span className="row-start-5 col-start-6">e</span>
      <span className="row-start-5 col-start-7">n</span>
      <span className="row-start-5 col-start-8">k</span>
      <span className="row-start-5 col-start-9">o</span>
      <span className="row-start-5 col-start-10 col-span-2">@</span>
      <span className="row-start-5 col-start-12">v</span>
      <span className="row-start-5 col-start-13">l</span>
      <span className="row-start-5 col-start-14">a</span>
      <span className="row-start-5 col-start-15">d</span>
      <span className="row-start-5 col-start-16">c</span>
      <span className="row-start-5 col-start-17">o</span>
      <span className="row-start-5 col-start-18">d</span>
      <span className="row-start-5 col-start-19">e</span>
      <span className="row-start-5 col-start-20">r</span>
      <span className="row-start-5 col-start-21">.</span>
      <span className="row-start-5 col-start-22">c</span>
      <span className="row-start-5 col-start-23">a</span>

      <div className="h-full w-full row-start-6 col-start-10 col-span-11 flex items-center justify-center">
        <Brackets width={ww.x} height={wh} />
      </div>
      <p className="h-full w-full row-start-7 col-start-10 col-span-11 flex items-start justify-center text-sm">
        X
      </p>
      <div className="h-full w-full row-start-8 col-start-12 col-span-12 flex items-center justify-center">
        <Brackets width={ww.instagram} height={wh} />
      </div>
      <p className="h-full w-full row-start-9 col-start-12 col-span-12 flex items-start justify-center text-sm">
        Instagram
      </p>
      <div className="h-full w-full row-start-10 col-start-1 col-span-full flex items-center justify-center">
        <Brackets width={ww.email} height={wh} />
      </div>
      <p className="h-full w-full row-start-11 col-start-1 col-span-full flex items-start justify-center text-sm">
        E-mail
      </p>
    </div>
  );
};

export default ContactInfo;
