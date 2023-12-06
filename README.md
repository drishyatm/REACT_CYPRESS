# REACT_CYPRESS
Cypress is a powerful end-to-end testing framework that aims to simplify testing by making it easier to set up, write, and debug tests. This document will guide you through the process of setting up Cypress and using it for testing a web application.

## Prerequisites
- Node.js installed on your machine (https://nodejs.org/en/)

## Setting Up Cypress

1. Open a terminal or command prompt.
```python
git clone https://github.com/drishyatm/REACT_CYPRESS.git
```

2. Navigate to the project directory using cd command in the terminal:
```python

cd REACT_CYPRESS
```

3. Install cypress 
```python
npm install cypress --save-dev
```

4. After the installation is complete, you can run Cypress using the following command:
```python
npx cypress open
```

This will open the Cypress Test Runner in your browser.

5. Select the browser that is installed in your machine to see how the UI test works (Select the E2E( configured tests)).

6. Install the mochaawesome- reporter to fetch the reports as html
   
```python
npm i --save-dev cypress-mochawesome-reporter
```
7. Run the test
```python
   npm run test
```
Click on the report link to see the report.html
