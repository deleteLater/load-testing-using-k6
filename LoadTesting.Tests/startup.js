import http from 'k6/http';

export default function () {
    /*
       while (true) {
          testing code...
       }
    */

    http.get('https://test-api.k6.io/');
}