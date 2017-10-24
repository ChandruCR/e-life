//Global variables used accross all components

export let global = {
    username: "",
    applications: [
        { "name": "eRecipe", "desc": "User can store and retrieve recipes here", "imagePath": "assets/images/eRecipe.jpeg" },
        { "name": "eNotes", "desc": "User can store and retrieve notes here", "imagePath": "assets/images/eNotes.jpeg" }
    ],
    labels: {
        "navBar":{
            "title": "eLife",
            "logout": "LOGOUT"
        },
        "login":{
            "login": "LOGIN"
        },
        "eRecipeHome":{
            "return": "RETURN",
            "add": "ADD RECIPE"
        },
        "addERecipe": {
            "recipeName": "RECIPE NAME",
            "recipeType": "RECIPE TYPE",
            "description": "RECIPE DESCRIPTION",
            "addDetails": "ADD DETAILS",
            "saveRecipe": "SAVE RECIPE",
            "return": "RETURN"
        },
        "viewERecipe": {
            "recipeName": "RECIPE NAME",
            "recipeType": "RECIPE TYPE",
            "description": "RECIPE DESCRIPTION",
            "return": "RETURN",
            "delete": "DELETE RECIPE"
        }
    },
    placeHolders: {
        "login": {
            "username": "Enter Username here"
        },
        "addERecipe": {
            "recipeName": "Provde Recipe Name here",
            "recipeType": "Provide Recipe Type here",
            "description": "Describe Recipe here",
            "title": "Provde Title here",
            "value": "Provide Value here"
        }
    }
};