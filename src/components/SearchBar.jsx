import React, { useEffect, useRef } from "react";

function SearchBar({ search, setSearch }) {
    const searchInput = useRef(null);

    useEffect(() => {
        searchInput.current.focus();
    }, []);

    return (
        <div className="mb-6">
            <input
                type="text"
                ref={searchInput}
                placeholder="Search food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-orange-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-orange-400"
            />
        </div>
    );
}

export default SearchBar;