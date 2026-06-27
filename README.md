# QA DevOps AI Challenge

## 🎯 Objetivo
Implementar un flujo completo de QA y DevSecOps con pruebas automatizadas, performance y control de calidad continuo.

## 🧰 Herramientas utilizadas
- Playwright (UI/API testing)
- K6 (performance)
- GitHub Actions (CI/CD)
- Allure Reports (reportes HTML)
- Trufflehog (seguridad y secretos)

## Estructura

qa-devops-ai-challenge/
├── tests/
│   ├── api/
│   ├── ui/
├── performance/
│   ├── k6/
│   ├── jmeter/
├── docs/
│   ├── test-plan.md
│   ├── bug-reports.md
│   ├── ai-analysis.md
├── evidences/
├── .github/
│   ├── workflows/
├── README.md
├── .gitignore

## Instalacion

Requisitos:

- Node.js 22 o superior
- npm 11 o superior
- Chrome, Firefox y Edge instalados en la maquina

Instalar dependencias:

```bash
npm install
npx playwright install
```


## 🚀 Ejecución de pruebas
1. Clonar el repositorio.
2. Instalar dependencias: `npm ci`
3. Ejecutar pruebas: `npx playwright test`
4. Ejecutar performance: `k6 run performance/k6/test.js`
5. Ejecutar performance: `JMETER run performance/k6/test.js`