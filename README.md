# REACT_CYPRESS
Cypress is a powerful end-to-end testing framework that aims to simplify testing by making it easier to set up, write, and debug tests. This document will guide you through the process of setting up Cypress and using it for testing a web application called evershop

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
Note: Configure the folder structure /report folders in the cypress.config.js

7. Run the test
```python
   npm run test
```
Click on the report link to see the report.html

8. Integrate with cypress cloud
   
   a) First we should configure/login
   ```python
      npx cypress open
   ```
   b)  Go to the Settings in the right hand menu
   c)  Connect to "Cypress Cloud settings"
   d)  Create account/login with google account
   e)  Export the credentials in the terminals 
       ```python
       export CYPRESS_RECORD_KEY =< key provided in UI >      
       ```
   f)  Run the test 
       ```python
       npm run test --record
       ```
   g) Reports will be visible on the UI as well as the terminal
   ![Selection_288](https://github.com/drishyatm/REACT_CYPRESS/assets/66368262/58f39f87-b7fe-492b-ac28-0fb511da7644)

9. Integrate with Browser stack 

   a) Run the browserstack cli
      ```python
      npm i -g browserstack-cypress-cli
      ```
   b) Run the following command to initialize the project folder and create a boilerplate browserstack.json file
      Skip this step, if you have the browserstack configuration already ready . 
      ```python
      browserstack-cypress init
      ```
   c) Run the browserstack command
      ```python
      browserstack-cypress run --u<username> -k <browserstack key>
     ```
   d) Reports can be viewed by clicking on the one that appears at the conclusion of the test terminal output OR        by using BrowserStack. The dashboard will include a comprehensive report with information on the                  platforms and browsers used for the test runs. 

   


