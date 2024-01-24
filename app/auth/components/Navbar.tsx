import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-6 my-2">
      <div>
        <Image src="/mlogo.png" height={80} width={80} alt="logo" />
      </div>

      <div className="flex gap-4">
        <div>
          <Button>login</Button>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
