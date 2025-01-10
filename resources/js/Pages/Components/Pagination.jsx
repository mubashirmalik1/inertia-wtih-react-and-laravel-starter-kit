import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="mt-8">
            {
                links.map((link, index) => (
                    link.url ? (
                        <Link key={index}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            href={link.url}
                            className={`text-blue-500 p-3 ${link.active ? 'font-bold' : ''}`}
                        />
                    ) : (
                        <span key={index}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="text-slate-500 p-3"
                        />
                    )

                ))
            }
        </div>
    );
}