import React, { useState ,useRef,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import homelogo from '../../assets/images/icons8-home.png';
import facebooklogo from '../../assets/images/icons8-facebook-400.png';
import instagramlogo from '../../assets/images/icons8-instagram-500.png';
import twitterlogo from '../../assets/images/icons8-twitter-400.png';
import youtubelogo from '../../assets/images/icons8-youtube-480.png';
import useAnalyticsData from '../../hooks/useAnalyticsData';
import Chart from 'chart.js/auto'; // Import Chart.js
import Users from './Users'

const Dashboard = () => {
  const [Home, setHome] = useState(true);
  const [Analytics, setAnalytics] = useState(false);
  const [Members, setMembers] = useState(false);
  const [Social, setSocial] = useState(false);
  
  const clientId = '8517388476-ne2h2stdelva6d6ej8e18qe6csum0u1h.apps.googleusercontent.com';
  
  const requestParams = {
    reportRequests: [
      {
        viewId: '294888407', // Replace with your Google Analytics View ID
        dateRanges: [
          {
            startDate: '2023-08-01', // Replace with your desired start date
            endDate: '2023-08-30',   // Replace with your desired end date
          },
        ],
        metrics: [
          {
            expression: 'ga:users',
          },
        ],
      },
    ],
  };

  const data = useAnalyticsData(clientId,requestParams);
  const chartRef = useRef(null);
  


  const chartData = data
    ? {
        labels: ['Users'],
        datasets: [
          {
            label: 'Users',
            data: [parseInt(data.reports[0].data.totals[0].values[0])], // Assuming your data structure
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color of bars
            borderColor: 'rgba(75, 192, 192, 1)', // Border color of bars
            borderWidth: 1, // Border width of bars
          },
        ],
      }
    : null;

  useEffect(() => {
    // Create the chart when the component mounts
    if (chartRef.current && chartData) {
      new Chart(chartRef.current, {
        type: 'bar', // Bar chart
        data: chartData,
      });
    }
  }, [chartData]);



  
  const home = () =>{
    setHome(true)
    setAnalytics(false)
    setMembers(false)
    setSocial(false)
  };

  const analytics = () => {
    setHome(false)
    setAnalytics(true)
    setMembers(false)
    setSocial(false)

  };

  const members = () => {
    setHome(false)
    setAnalytics(false)
    setMembers(true)
    setSocial(false)

  };
  const social = () => {
    setHome(false)
    setAnalytics(false)
    setMembers(false)
    setSocial(true)

  };

  return (
    <div class="dashboard-main">

      <div class="dashboard-card-main dashboard-navigation-card">
        <div class = "dashboard-navigation-cards-group-upper">
          
          <div class="dashboard-cards dashboard-navigation-cards-hero">
            <img class="dashboard-form__icon-hero" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">DASHBOARD</h1>
          </div>
          
          
          <div class="dashboard-vertical-cards dashboard-vertical-cards-upper dashboard-navigation-card-group-mid">
            
            <div class="dashboard-cards dashboard-navigation-cards-menu" onClick={home}>
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">HOME</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu" onClick={analytics}>
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">ANALYTICS</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu" onClick={members}>
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">MEMBERS</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu" onClick={social}>
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">SOCIAL</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>
            
            
          </div>

        </div>
        
        <div class = "dashboard-navigation-cards-group-lower">
          <Link to='/profile'>
            <div class="dashboard-cards dashboard-navigation-cards-profile" >
              <img class="dashboard-form__icon-profile" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-profile-text">Karan</h1>
            </div>
          </Link>
        </div>
      </div>
      { Home &&(
      <div className='dashboard-card-group-align'>
        <div class="dashboard-card-main dashboard-card-group">
          
            <div class="dashboard-horizontal-cards dashboard-card-group-top">
              
                <div class="dashboard-cards dashboard-cards-top">
                  <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                  <h1 class="dashboard-navigation-hero-text">STATS</h1>
                </div>
                <div class="dashboard-cards dashboard-cards-top">
                  <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                  <h1 class="dashboard-navigation-hero-text">STATS</h1>
                </div>
                <div class="dashboard-cards dashboard-cards-top">
                  <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                  <h1 class="dashboard-navigation-hero-text">STATS</h1>
                </div>
                <div class="dashboard-cards dashboard-cards-top">
                  <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                  <h1 class="dashboard-navigation-hero-text">STATS</h1>
                </div>
                <div class="dashboard-cards dashboard-cards-top">
                  <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                  <h1 class="dashboard-navigation-hero-text">STATS</h1>
                </div>
              
              
            </div>
            <div class="dashboard-horizontal-cards dashboard-card-group-mid">
              <div class="dashboard-cards dashboard-cards-mid">
                <img class="dashboard-form__icon-mid" src={facebooklogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">FACEBOOK</h1>
              </div>
              <div class="dashboard-cards dashboard-cards-mid">
                <img class="dashboard-form__icon-mid" src={youtubelogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">YOUTUBE</h1>
              </div>
              <div class="dashboard-cards dashboard-cards-mid">
                <img class="dashboard-form__icon-mid" src={twitterlogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">TWITTER</h1>
              </div>
              <div class="dashboard-cards dashboard-cards-mid">
                <img class="dashboard-form__icon-mid" src={instagramlogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">INSTAGRAM</h1>
              </div>
              
            </div>
            <div class="dashboard-horizontal-cards dashboard-card-group-bottom">
              <div class="dashboard-cards dashboard-cards-bottom">
                <Users/>
              </div>
              
            </div>
        </div>
      </div>
      )}
      { Members &&(
      <div className='dashboard-card-group-align'>
        <div class="dashboard-card-main dashboard-card-group">
            <div class="dashboard-horizontal-cards dashboard-card-group-bottom">
              <div class="dashboard-cards dashboard-cards-bottom">
                <Users/>
              </div>
            </div>
        </div>
      </div>
      )}
      { Analytics &&(
      <div className='dashboard-card-group-align'>
        <div class="dashboard-card-main dashboard-card-group">
          
            
            <div class="dashboard-horizontal-cards dashboard-card-group-bottom">
              <div class="dashboard-cards dashboard-cards-bottom">
                <canvas ref={chartRef} /> {/* Chart canvas */}
              </div>
              
            </div>
        </div>
      </div>
      )}
      { Social &&(
      <div className='dashboard-card-group-align'>
        <div class="dashboard-card-main dashboard-card-group">
          
          <div class="dashboard-horizontal-cards dashboard-card-group-mid">
            <div class="dashboard-cards dashboard-cards-mid">
              <img class="dashboard-form__icon-mid" src={facebooklogo} alt=''/>
              <h1 class="dashboard-navigation-hero-text">FACEBOOK</h1>
            </div>
            <div class="dashboard-cards dashboard-cards-mid">
              <img class="dashboard-form__icon-mid" src={youtubelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-text">YOUTUBE</h1>
            </div>
            <div class="dashboard-cards dashboard-cards-mid">
              <img class="dashboard-form__icon-mid" src={twitterlogo} alt=''/>
              <h1 class="dashboard-navigation-hero-text">TWITTER</h1>
            </div>
            <div class="dashboard-cards dashboard-cards-mid">
              <img class="dashboard-form__icon-mid" src={instagramlogo} alt=''/>
              <h1 class="dashboard-navigation-hero-text">INSTAGRAM</h1>
          </div>
            
          </div>
          <div class="dashboard-horizontal-cards dashboard-card-group-top">
            
              <div class="dashboard-cards dashboard-cards-top">
                <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">STATS</h1>
              </div>
              <div class="dashboard-cards dashboard-cards-top">
                <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">STATS</h1>
              </div>
              <div class="dashboard-cards dashboard-cards-top">
                <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">STATS</h1>
              </div>
              <div class="dashboard-cards dashboard-cards-top">
                <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">STATS</h1>
              </div>
              <div class="dashboard-cards dashboard-cards-top">
                <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
                <h1 class="dashboard-navigation-hero-text">STATS</h1>
              </div>
            
            
          </div>
            
            
        </div>
      </div>
      )}

    </div>



  )
}

export default Dashboard












