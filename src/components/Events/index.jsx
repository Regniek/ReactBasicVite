import { useState } from 'react';

import EventItem from './components/EventItem';
import eventsJSON from '../../data/events.json';

const Events = ({ searchTerm }) => {
    const [data] = useState(eventsJSON);
    const { _embedded: { events }} = data;

    const handleEventItemClick = (id) => {
        console.log('Click en el evento con id: ', id);
    }

    const renderEvents = () => {

        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = events.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return eventsFiltered.map((eventItem) => (
            <EventItem 
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url} 
                id={eventItem.id}
                onEventClick={handleEventItemClick}
            />
        ));
    }

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};

export default Events;