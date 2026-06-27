const fs = require('fs');

const performanceErrors = 0.5; // porcentaje simulado
const avgResponseTime = 1.8; // segundos simulados

if (performanceErrors > 1) {
  console.error('❌ Error: porcentaje de errores > 1%');
  process.exit(1);
}

if (avgResponseTime > 2) {
  console.error('❌ Error: tiempo de respuesta fuera del umbral');
  process.exit(1);
}

console.log('✅ Quality Gates aprobados');
