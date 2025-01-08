const Layout = ({ children }) => {
  return (
    <>
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/create">Create</a>
                <a href="/delete">Delete</a>
            </nav>
        </header>

        <main>
            {children}
        </main>
    </>
  );
};

export default Layout;