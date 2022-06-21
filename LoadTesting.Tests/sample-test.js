import http from 'k6/http'

export let options = {
    vus: 1,
    duration: '10s'
};

export default () => {
    http.get('https://localhost:5001/api/weather-forecast');
};