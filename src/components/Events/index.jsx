import useEventsData from '../../hooks/useEventsData';

import EventItem from './components/EventItem';

const Events = ({ searchTerm }) => {
    const { events } = useEventsData();

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