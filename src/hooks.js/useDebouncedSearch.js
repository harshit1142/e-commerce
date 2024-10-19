
import React, { useEffect, useState } from "react"

const useDebouncedSearch = (value,delay) => {
    
    const [debouncedSearch,setDebouncedSearch] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(value)
        },delay)

        return () => clearInterval(timeout);
    },[value,delay])

    return debouncedSearch;
}

export default useDebouncedSearch;
