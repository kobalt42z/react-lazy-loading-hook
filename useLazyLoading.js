import { useCallback, useEffect, useState } from 'react'

const useLazyLoading = ({ target, distance, targetPercent, initPage = 0 }, callback) => {
    const [page, setPage] = useState(initPage);
    const [data, setData] = useState([]);

    useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(page => {
                    callback(page)
                    return page + 1
                })
            }
        }, { root: null, rootMargin: distance, threshold: targetPercent });

        observer.observe(target.current);
        return () => observer.unobserve(target.current);
    }, [data]);

    const addData = useCallback((newData) => {
        if (Array.isArray(newData) && newData.length) {
            setData([...data, ...newData]);
        }
    }, [data])
    return [data, addData];
}
export default useLazyLoading;