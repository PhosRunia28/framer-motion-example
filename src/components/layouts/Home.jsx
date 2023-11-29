import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import motionIcon from "../../img/home.jpg";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-4 pt-14 lg:pt-10">
      <h1 className="mb-2 text-center text-4xl font-bold">Framer Motion</h1>
      <h3 className="text-center text-xl font-bold">Animation Example</h3>
      <div className="mx-auto my-10 max-w-md">
        <img src={motionIcon} alt="motion" className="w-full bg-cover" />
      </div>

      <div className="flex justify-center gap-8 ">
        <div className="">
          <a
            href="https://github.com/PhosRunia28"
            target="_blank"
            className="flex items-center gap-3 rounded-sm border border-black bg-black px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-black"
            rel="noreferrer"
          >
            <GitHubLogoIcon className="h-[1.8rem] w-[1.8rem]" />
            My Github
          </a>
        </div>
        <div className="">
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            className="flex items-center gap-2 rounded-sm border border-destructive bg-destructive px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-black"
            rel="noreferrer"
          >
            Documentation
            <ArrowRightIcon className="h-[1.8rem] w-[1.8rem]" />
          </a>
        </div>
      </div>
    </div>
  );
}
