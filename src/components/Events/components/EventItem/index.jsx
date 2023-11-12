const EventItem = ({info, id, name, image, onEventClick}) => {
    
    const handleEventItemClick = (e) =>{
        e.stopPropagation()
        onEventClick(id)
    }

    return (
       <div onClick={() => console.log('padre')}>
        <img src={image} alt={name} width={200} height={200} />
        <h4>{name}</h4>
        <p>{info}</p>
        <button onClick={handleEventItemClick}
        >Ver mas</button>
       </div> 
    );
};

export default EventItem;