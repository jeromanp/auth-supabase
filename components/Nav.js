import Link from "next/link";


const Nav = () => {
  return (
    <nav className="flex py-4 px-6 border-b border-gray-200">
      <Link href="/" passHref={true} legacyBehavior={true}>
        <a className="mx-2 my-1">Home</a>
      </Link>

      <Link href="/login" passHref={true} legacyBehavior={true}>
        <a className="mx-2 my-1">Login</a>
      </Link>
    </nav>
  );
};

export default Nav;
