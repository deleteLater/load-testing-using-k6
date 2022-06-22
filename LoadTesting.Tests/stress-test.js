/* 
  Stress Testing is a type of load testing used to determine the limits of the system.
  The purpose of this test is to verify the stability and reliability of the system under extreme conditions.
  
  Run a stress test to: 
    - Determine how your system will behave under extreme conditions 
    - Determine what is the maximum capacity of your system in terms of users or throughput 
    - Determine the breaking point of your system and its failure mode 
    - Determine if your system will recover without manual intervention after the stress test is over 
    
  More of a load test than a spike test
*/

import http from 'k6/http'

export let options = {
  stages: [
    // below normal load
    { duration: '10s', target: 100 },

    // normal load
    { duration: '30s', target: 500 },

    // staying flag at normal load for 1 minute
    { duration: '1m', target: 500 },

    // around the breaking point
    { duration: '2m', target: 1000 },

    // staying flag at the breaking point for 30s
    { duration: '30s', target: 1000 },

    // beyond the breaking point
    { duration: '10s', target: 1500 },

    // scale down. recovery stage
    { duration: '5m', target: 0 }
  ]
}

export default () => {
  http.get('https://localhost:5001/api/weather-forecast');
};