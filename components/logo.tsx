import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/logo.svg"} alt="logo-ipsum" height={30} width={30} />
        <p className={cn("text-2xl text-neutral-700", headingFont.className)}>Taskify</p>
      </div>
    </Link>
  );
};

export default Logo;
