import Layout from "../Layout/Layout";
const Home = () => {
    return (
        <div>
            <h1 className="title">Hello World</h1>
        </div>
    );
};

Home.layout = page => <Layout children={page} />;

export default Home;