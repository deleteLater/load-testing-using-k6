/*
  Spike test is a variation of a stress test, but it does not gradually increase the load, instead it spikes to extreme load over a very short window of time 
  Run a spike test to: 
    - Determine how your system will perform under a sudden surge of traffic 
    - Determine if your system will recover once the traffic has subsided 
    
  Success is based on expectations. Systems will generally react in 1 of 4 ways 
    - Excellent: system performance is not degraded during the surge of traffic.Response time is similar during low traffic and high traffic 
    - Good: Response time is slower, but the system does not produce any errors.All requests are handled 
    - Poor: System produces errors during the surge of traffic, but recovers to normal after the traffic subside
    - Bad: System crashes, and does not recover after the traffic has subsided
*/

import http from 'k6/http'

export let options = {
  stages: [
    // normal load
    { duration: '30s', target: 500 },

    // staying flag at normal load for 1 minute
    { duration: '1m', target: 500 },

    // spike to 1500 users
    { duration: '10s', target: 1500 },

    // stay at 1500 for 1m
    { duration: '1m', target: 1500 },

    // quickly scale down to 0 users
    { duration: '1m', target: 0 }
  ]
}

export default () => {
  http.get('https://localhost:5001/api/weather-forecast');
};