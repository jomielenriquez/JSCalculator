# JSCalculator
This is a calculator written in react.js

# Deploying react in GitHub

Source: https://github.com/gitname/react-gh-pages/blob/master/README.md

Step 1: Create react app using the command bellow

```python
# create new react app
npx create-react-app <name of the new react app>
```
- NOTE: skip this step if you already have a create project

Step 2: Change your directory to the created create project and install gh-pages using the command below
```python
# change your current directory
cd <name of the app>

# install gh-pages
npm install gh-pages --save-dev
```
Step 3: Go to package.json and add the following

- Add the homepage
```diff
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://gitname.github.io/<name of the github repository>",
  "private": true,
```
Example 

```diff
+  "homepage": "https://jomielenriquez.github.io/DrumsRepo",
```

- Add a `predeploy` property and a `deploy` property to the `scripts` object:

```diff
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

Step 4: Add a "remote" that points to the GitHub repository.
- NOTE: do this if you dont have git repo yet

Step 5: Push the React app to the GitHub repository using the code below
```python
# use this
$ npm run deploy
# or this
$ npm run deploy -- -m "Deploy React app to GitHub Pages"
```