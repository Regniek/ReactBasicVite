import { useState, useRef, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import useEventsData from '../../hooks/useEventsData';

import styles from './Home.module.css'
import Navbar from '../../components/Navbar'
import Events from '../../components/Events'

const Home = () => {
  const { events, isLoading, error, fetchEvents, page } = useEventsData();
  const [searchTerm,setSearchTerm] = useState('')
  const containerRef = useRef(null);

  useEffect(() => {
    fetchEvents();
  }, [])

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current)
    setSearchTerm(term)
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = (data) => {
    const selected = data.selected;
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  }

  const renderEvents = () => {
    if (isLoading) {
      return <div> Cargando resultados... </div>
    }
    if (error) {
      return <div> Error al cargar los resultados </div>
    }
    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate 
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          breakLabel={'...'}
          nextLabel={'->'}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel={'<-'}
          renderOnZeroPageCount={null}
          activeClassName={styles.active}
          disabledClassName={styles.disabled}
        />
      </div>
    )
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  )
};

export default Home;