import Link from "next/link";
import Image from "next/image";

const navLinks: string[] = ["Pricing", "Enterprise", "About"]

const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Link href="/" className="flex flex-row items-center justify-center">
        <Image src="logo.svg" width={40} height={40} alt="logo" priority={true} className="mr-1" />
        <div className="h-6 text-4xl font-semibold flex items-center justify-center mb-3 hover:text-secondary-dark">
          zapteon
        </div>
      </Link>
      <div className="mx-8">
        {
          navLinks.map((name: string) => (
            <Link key={name} href={name} className="mx-8 hover:text-secondary-dark">{name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default function Navbar() {
  return (
    <div className="flex justify-center w-screen py-10">
      <div className="w-box font-bold flex items-center justify-between">
        <Navigation />
      </div>
    </div>
  );
}

