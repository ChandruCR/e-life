# ELife - Angular 4

This project is part of Microservice implmentation using Springboot, MongoDB and Angular4

Microservice implementation as of 26th October 2017 contains 4 projects
1. [eLife - Angular4 UI application](https://github.com/ChandruCR/eLife-angular4)
2. [eLife - Springboot application(consumes microservices)](https://github.com/ChandruCR/eLife-springboot)
3. [eLife-eureka - Springboot application(eureka service registry and discovery)](https://github.com/ChandruCR/eLife-eureka)
4. [eRecipe - Springboot application(exposes services to interact with mongodb)](https://github.com/ChandruCR/eRecipe-springboot)

![architecutre](https://github.com/ChandruCR/e-life/blob/master/elife.png)

### Setup 

* Change baseUrlForERecipe property value in environment.ts file to [elife-springboot](https://github.com/ChandruCR/elife)
* Install all dependencies using "npm install"
* Then start server using "ng serve --host 0.0.0.0"
* Open localhost:4200 in browser to access the application

### Screenshots

#### Login Screen
* Provide username and click on login button
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/1.png)

#### eLife Home Screen
* List of applications are listed here
* Click on eRecipe 
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/2.png)

#### eRecipe Home Screen
* List of all recipes saved by all users are listed here
* Click on any recipe to view it's details
* Click on Add Recipe Button to add new recipe
* Click on return to return to eLife Home
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/3.png)

#### eRecipe View Details Screen(Recipe created by same user)
* Complete details of a recipe 
* Click on return to return to eRecipe Home 
* If recipe is created by you then you can click on Delete recipe button to delete the recipe
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/4.png)

#### eRecipe View Details Screen(Recip created by different user)
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/5.png)

#### Add eRecipe Screen
* Provide values for Recipe Name, Recipe Type and Description
* If you want to enter more details click on Add details button
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/6.png)
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/7.png)

#### eRecipe Home Screen(after addition of new recipe)
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/8.png)

#### eRecipe view(viewing and deleting newly created recipe)u on
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/9.png)
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/10.png)

#### Logout
* You can click on logout button on top right corner to return to login screen
(https://github.com/ChandruCR/eLife-angular4/blob/master/screenshots/1.png)



##### Chandru - goldenducks





