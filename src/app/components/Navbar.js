import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="w-full flex flex-row justify-center items-center gap-4 bg-gray-300">
        <Link href="/">
          <p className="p-4 text-black hover:text-blue-400">Page 1</p>
        </Link>
        <Link href="/Page2">
          <p className="p-4 text-black hover:text-blue-400">Page 2</p>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
