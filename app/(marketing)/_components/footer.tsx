import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed px-4 py-3 w-full bottom-0 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center w-full justify-between">
            <Button size={"sm"} variant={"ghost"}>Privacy Policy</Button>
            <Button size={"sm"} variant={"ghost"}>Terms of Service</Button>
        </div>
      </div>
    </div>
  );
};
