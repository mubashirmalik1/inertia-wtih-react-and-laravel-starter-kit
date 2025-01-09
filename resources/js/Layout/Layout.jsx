import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
  return (
    <>
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/create">Create</Link>
                <Link href="/delete">Delete</Link>
            </nav>
        </header>

        <main>
            {children}
        </main>
    </>
  );
};

export default Layout;