class RecipeStore{
    constructor(){
        this.recipes = [];
        let localStore = localStorage.getItem('fcc-recipe-box');
        if(!localStore){
            localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
        }
        else{
            this.recipes = JSON.parse(localStore);
        }
    }
    createRecipe(recipe){
        this.recipes.push(recipe);
        localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
    }
    updateRecipe(recipe){
        var indexToUpdate = this.recipes.findIndex((r) => r.id == recipe.id);
        this.recipes[indexToUpdate] = recipe;
        localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
    }
    deleteRecipe(recipeId){
        var indexToDelete = this.recipes.findIndex((r) => r.id == recipeId);
        this.recipes.splice(indexToDelete, 1);
        localStorage.setItem('fcc-recipe-box', JSON.stringify(this.recipes));
    }
    getRecipe(recipeId){
        return this.recipes.find((r) => r.id == recipeId);
    }
    getAllRecipes(){
        return this.recipes;
    }
}

export default RecipeStore;