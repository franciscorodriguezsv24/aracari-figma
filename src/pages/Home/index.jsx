import React,{useState, useEffect} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeCard from '../../components/HomeCard'
import StyleCss from './Home.module.css'

const Home = () => {

  const [services, setServices] = useState(null);

  useEffect(() => {
    fetch('../../../db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setServices(data.service);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!services) return <div className={StyleCss.loadingContainer}>Loading...</div>;

      return (
        <div className={StyleCss.homeContainer}>
          <div className={StyleCss.backgroundGradient}>
            <div className={StyleCss.circleGradient1}>
            </div>
            <div className={StyleCss.circleGradient2}>
            </div>
            <div className={StyleCss.circleGradient3}>
            </div>
            <div className={StyleCss.circleGradient4}>
            </div>
          </div>
          <Header/>
          <section className={StyleCss.titleContainer}>
            <div>
              <p className={StyleCss.title}>Soluciones Legales Inclusivas</p>
              <p className={StyleCss.subtitle}>Cada situación es diferente. Ofrecemos un proceso legal directo y práctico.</p>
            </div>
            <div className={StyleCss.cardContainer}>
            {
              services.map(service => (
                <HomeCard key={service.id} title={service.title} services={service.services} buttonTitle={service.buttonTitle}/>
              ))
            }
            </div>
          </section>      
          <Footer/>
        </div>
      )
  }

export default Home