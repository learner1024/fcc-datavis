import React, {Component} from 'react';
import Recipe from './recipe.jsx';
import RecipeStore from '../stores/RecipeStore.js';

class RecipeBox extends Component{
    constructor(props){
        super(props);
        
        this.recipeStore = new RecipeStore();
        this.state = {
            newRecipeName: '',
            recipes : this.recipeStore.getAllRecipes()
        };
    }
    recipeNameChangeHandler(e){
        this.setState({newRecipeName: e.target.value})
    }
    createRecipeCommandHandler(){
        this.recipeStore.createRecipe({name: this.state.newRecipeName, ingredients: []});
        this.setState({ 
            recipes : this.recipeStore.getAllRecipes()
        });
    }    
    deleteRecipeCommandHandler(recipeId){
        this.recipeStore.deleteRecipe(recipeId);
        this.setState({ 
            recipes : this.recipeStore.getAllRecipes()
        });
    }
    updateRecipeCommandHandler(recipe){
        this.recipeStore.updateRecipe(recipe);
        this.setState({ 
            recipes : this.recipeStore.getAllRecipes()
        });
    }
    render(){
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <input type='text' placeholder='recipe name...' onChange={this.recipeNameChangeHandler.bind(this)}/>
                        <button onClick={this.createRecipeCommandHandler.bind(this)}>Create</button>
                    </div>
                </div>
                <div id="accordion" role="tablist" aria-multiselectable="true">
                    {
                        this.state.recipes.map((r) => {
                            return (
                                <Recipe recipe={r} key={r.id}
                                    deleteCommand={this.deleteRecipeCommandHandler.bind(this)} 
                                    updateCommand={this.updateRecipeCommandHandler.bind(this)}  
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default RecipeBox;