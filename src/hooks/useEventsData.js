import { useRef, useEffect } from 'react';
import eventsJSON from '../data/events.json';

const useEventsData = () => {
    const data = useRef([]);

    useEffect(() => {
        setTimeout(() => {
            data.current = eventsJSON;

            console.log('data.current', data.current);
        }, 4000);
        //load api code
    }, []);

    return {
        events:  data.current?._embedded?.events || [],
    };
};

export default useEventsData;