import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MobileNavigation } from "./MobileNavigation";

const navLinks: string[] = ["Pricing", "Enterprise", "About"]

const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Link href="/" className="flex flex-row items-center justify-center ml-3">
        <Image src="logo.svg" width={40} height={40} alt="logo" priority={true} className="mr-1" />
        <div className="h-6 text-4xl font-semibold flex items-center justify-center mb-3 hover:text-secondary-dark transition-colors duration-300 ease-in-out">
          zapteon
        </div>
      </Link>
      <div className="mx-10 hidden xl:flex">
        {
          navLinks.map((name: string) => (
            <Link key={name} href={name.toLowerCase()} className="text-lg mx-10 hover:text-secondary-dark transition-colors duration-300 ease-in-out">{name}</Link>
          ))
        }
      </div>
    </div>
  )
}

const AuthSection = () => {
  return (
    <div className="hidden xl:flex items-center justify-center">
      <div className="flex items-center justify-center">
        <Link
          href="/log-in"
          className={cn("ml-8", buttonVariants({ variant: "ghost" }))}
        >
          Log In
        </Link>
        <Link href="/sign-up" className={cn("ml-8", buttonVariants())}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="flex justify-center w-screen py-10">
      <div className="w-boxPhone sm:w-boxTablet xl:w-box font-bold flex items-center justify-between">
        <Navigation />
        <MobileNavigation />
        <AuthSection />
      </div>
    </div>
  );
}

