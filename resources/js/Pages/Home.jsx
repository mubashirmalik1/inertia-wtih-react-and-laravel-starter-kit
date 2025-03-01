import { Link } from "@inertiajs/react";
import Layout from "../Layout/Layout";
import Pagination from "./Components/Pagination";
const Home = ({posts}) => {
    return (
       <>
        <div>
          {
            posts.data.map(  
                post => (
                    <div key={post.id} className="border-b pb-3 mt-4">
                        <h2 className="font-bold mb-2">{post.title}</h2>
                        <p>{post.body}</p>
                        <p className="text-slate-400">
                            <span >Posted At:</span>
                             {new Date(post.created_at).toLocaleTimeString()}</p>
                    </div>
                )
            )
          }
        </div>
        <Pagination links={posts.links} />
       </> 
       
        
    );
};

//Home.layout = page => <Layout children={page} />;

export default Home;