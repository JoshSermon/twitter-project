import useSWR from 'swr';

import fetcher from '../libs/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current, fetcher');

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

// Stopped at 1:36:00 - June 9th, 2023