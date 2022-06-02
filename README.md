# Important Note Before you start :

## Note 1 : Heroku

1. Login to your Heroku account
2. Create a new Heroku app, called Ex : your-name
    1. Go to the deployment tab
    2. Choose “GitHub”
    3. Connect to your repository
    4. Choose the your branch that you want
    5. Choose the “Wait for CI to pass before deploy” option
    6. Choose the “enable automatic deploys” option

## Note 2 : The Code

 If you create the server from scratch(start), typing the lines of code in the demo provide.

1. Initialize your app in terminal – `npm init -y`

2. Install your dependencies in terminal – `npm install dotenv express jest`

3. Install in terminal – `npm install supertest` 

4. Create the files and folders required for the application

5. Create the correct content in the files

6. Test your server – npm test
    - You should see 100% of tests passing.

7. Start your server – nodemon or npm index.js(your main servre)
    - Visit http://localhost:3000/data in your browser to confirm 
               that the server is visible.

## Note 3 : Deploy!
Now that you have it all running, let’s get it deployed.

### First: Deploy to any Branch you want.
1. Complete an ACP on your branch.
2. Go immediately to the repository on GitHub and open the actions tab
      - You should see your tests running
      - If they were passing on your local machine, they’ll also pass here
3. Once your tests have passed, go to Heroku.com and look at your dev app’s Activity tab, it should show you an active deployment
4. When it completes, go to the Heroku app URL and open your server in the browser, you should see the same results as you saw locally.

### Second: go to production

Once your dev run has completed, you have successfully deployed your application through github, with tests to an app on Heroku

Now, we’re going to complete the “real” deployment process

1. Go to your repository on GitHub
2. Open a pull request from dev to main
3. If your tests are passing, you will be able to merge this branch
4. Once you merge, the tests will run again using GitHub actions
5. Once the tests pass, Heroku will deploy your “main” branch to your “production” app!
6. When that process completes, open your app in the browser to prove it.

# LAB: Express

Dynamic API Phase 1: Build your core, standards compliant Express server

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Create a new repository called `basic-express-server`
1. Work in a new branch called `dev`, created from `main`
1. Following completion of this assignment, create a Pull Request from `dev` to `main` and merge your code
   - You will deploy from your `main` branch to a new app at Heroku
   - You will add a link to the PR that you merged in your README for grading purposes

## Phase 1 Requirements

From a business requirements standpoint, we will be building a basic Express server using best practices, including server modularization, use of middleware, and tests.

### Person Route

- Method: GET
- Path: /person
  - Expects a query string from the user with a "name" property
  - When present, output JSON to the client with this shape:
      `{ name: "name provided" }`
  - Without a name in the query string, force a "500" error

### Implementation Notes

- Create an express server with the following proposed structure

```text
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── server.test.js
│   ├── validator.test.js
│   ├── logger.test.js
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── validator.js
│   ├── server.js
├── index.js
└── package.json
```

- `index.js` at the root of your repository, which will act as the "entry point" to your server.
  - should require `lib/server.js`
  - should require `dotenv`, reading PORT from your `.env` file
  - It should call the `.start()` method from the server with the PORT set in your environment
- `src/server.js` which will serve as your server 'module' ... will contain all of the module connections for the server
  - Must export an object with a `start()` method (it should not start on it's own) and a reference to the express `app`
- Create a middleware folder and add 2 middleware modules to it:
  - `logger.js`
    - Performs a console.log with the request method and path
    - Import this into your server and set it up to run at the application level for all routes
  - `validator.js`
    - Checks the query string for a `name` property
    - Sends the request through when valid, forces an error when not
- Create a error-handlers folder and add 2 modules to it:
  - `404.js`
    - Sends a 404/Not-Found message as the response
    - Import this into your server and set it up to be "used" after your other routes
  - `500.js`
    - Sends a 500/Server Error message as the response
    - Import this into your server and set it up to be "used" as the last route
- Create the `/person` route within your `server.js`
  - This route should use the validator middleware to check the user's input
  - If valid, send a JSON object through the response with the name value in it
    - i.e. `{name: "fred" }`

### Testing Requirements

- Assert the following
  - 404 on a bad route
  - 404 on a bad method
  - 500 if no name in the query string
  - 200 if the name is in the query string
  - given an name in the query string, the output object is correct

**Engineering Note** - *Testing servers without side-effects is crucial. More critical is not having to manage starting/stopping a server in multiple environments.*

### Deployment

Your server must be deployed to Heroku. Please note the deployed URL in your README!

### Notes the Demo

    - Take step by step to create the Repo.
    - Create new branch >> git checkout -b "dev"
    - npm init -y
    - npm i express dotenv jest
    - npm i -d supertest
    - Create server.js put the router on it.
    - Create index.js require the server.
    - Create middleware.
    - Create Test
    - To check the router is ok >> nodemon || node index.js.
    - To test the server >> npm run test
    - Update my readme file
    - A C P
    - Github action it should be passed.
    - Create the HEROKU app and deploy it with GitHub.

## Assignment Submission

  [Action Link](https://github.com/SohaibAlmomani/basic-express-server/actions)

   [Pull requests Link](https://github.com/SohaibAlmomani/basic-express-server/pulls?q=is%3Apr+is%3Aclosed)

   [Heroku Main Deploy](https://sohaib-express-server-main.herokuapp.com/)

   [Heroku Dev Deploy](https://sohaib-express-server-dev.herokuapp.com/)