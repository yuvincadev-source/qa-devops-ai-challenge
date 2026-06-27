import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // usuarios virtuales
  duration: '30s', // duración total de la prueba
  thresholds: {
    http_req_failed: ['rate<0.01'], // menos del 1% de errores
    http_req_duration: ['p(95)<500'], // 95% de las respuestas < 500 ms
  },
};

export default function () {
  const res = http.get('https://api.tu-endpoint.com');
  check(res, {
    'status es 200': (r) => r.status === 200,
    'tiempo de respuesta < 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1);
}
