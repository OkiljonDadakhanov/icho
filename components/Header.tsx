import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-around items-center">
        <Link href="/" className="text-2xl font-bold">
          IChO 2026
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="hover:text-blue-200">
              About
            </Link>
          </li>
          <li>
            <Link href="#schedule" className="hover:text-blue-200">
              Schedule
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
