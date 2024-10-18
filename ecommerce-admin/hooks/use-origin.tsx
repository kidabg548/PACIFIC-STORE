import { useEffect, useState } from "react"

export const useOrigin =() => {
    const [mounted, setMouted ] =useState(false);
    const origin = typeof window !=="undefined" && window.location.origin ?  window.location.origin: '';

    useEffect(() => {
        setMouted(true);
    }, []);

    if (!mounted) {
        return '';
    }

    return origin;
}