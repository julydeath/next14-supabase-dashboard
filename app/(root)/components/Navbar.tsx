"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggle";
import Image from "next/image";
import { logoutUser } from "@/app/auth/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = (user: any) => {
  const router = useRouter();
  const logout = async () => {
    await logoutUser();
    router.refresh();
  };

  var length = Object.keys(user).length;

  return (
    <div className="flex justify-between mx-6 my-2">
      <div>
        <Image src="/mlogo.png" height={80} width={80} alt="logo" />
      </div>
      <div className="flex gap-4">
        {length === 1 ? (
          <div>
            <Button onClick={logout}>logout</Button>
          </div>
        ) : (
          <Link href="/auth/login">
            <Button>login</Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
