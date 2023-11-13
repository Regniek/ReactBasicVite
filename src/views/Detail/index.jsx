import styles from './Detail.module.css';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const Detail = () => {
    const { eventId } = useParams();
    const [eventData, setEventData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fectEventData = async () => {
            try { 
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
                const data = await response.json();
                setEventData(data);
                setIsLoading(false);
            } catch (error) {
                setEventData({});
                setError(error);
                setIsLoading(false);
            }
        }
        fectEventData();
    }, []);

    console.log(eventData);
    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={eventData.images?.[0].url} alt={eventData.name} className={styles.eventImage}/>
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.eventParagraph}>{eventData.info}</p>
                {eventData.dates?.start.dateTime ? <p className={styles.dateParagraph}>{format(new Date(eventData.dates?.start.dateTime), 'd LLLL yyyy H:mm', { locale: es })}hrs</p> : null}
            </div>
            <div className={styles.seatInfoContainer}>
                <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
                <img src={eventData.seatmap?.staticUrl} alt={eventData.name} />
                <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
                <p className={styles.priceRangeLegend}>Rango de precios de: {eventData.priceRanges?.[0].min} - {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</p>
            </div>
            <a href={eventData.url} target='blank_'>
                Ir por tus boletos!
            </a>
        </div>
    );
};

export default Detail;