import { useForm } from "@inertiajs/react";

export default function Create() {
    const {data, setData, post, errors, processing} = useForm({
        title: '',
        body: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/posts');
    }
    return (
        <>
          <div className="text-center m-8">
                <h1 className="text-slate-700 text-2xl font-semibold">Create your new post</h1>
                <div>
                    <form  className="mt-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="title" className="text-slate-700">Title</label>
                            <input type="text" name="title" id="title" className="border border-slate-200 p-2 mt-1" value={data.title}
                             onChange={(e) => setData('title', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label htmlFor="body" className="text-slate-700">Body</label>
                            <textarea name="body" id="body" className="border border-slate-200 p-2 mt-1" value={data.body}
                             onChange={(e) => setData('body', e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="primary-btn">Create</button>
                        </div>
                    </form>
                </div>
          </div>
          
        </>
    )}