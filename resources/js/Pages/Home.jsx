import Layout from "../Layout/Layout";
const Home = ({name}) => {
    return (
        <div>
            <h1 className="title">Hello {name}</h1>
        </div>
    );
};

Home.layout = page => <Layout children={page} />;

export default Home;