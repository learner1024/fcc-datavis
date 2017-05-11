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
    render(){
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <input type='text' placeholder='recipe name...' onChange={(e) => 
                            this.setState({newRecipeName: e.target.value})
                        }/>
                        <button onClick={() => {
                            this.recipeStore.createRecipe({name: this.state.newRecipeName});
                            this.setState({ 
                                recipes : this.recipeStore.getAllRecipes()
                            });
                        }}>Create</button>
                    </div>                    
                </div>
                <div className='row'>
                    <div className='col'>
                        {                    
                            this.state.recipes.map((r) => {
                                return (
                                    <Recipe recipe={r} key={r.id}
                                        deleteCommand={ (recipeId) => {
                                            this.recipeStore.deleteRecipe(recipeId);
                                            this.setState({ 
                                                recipes : this.recipeStore.getAllRecipes()
                                            });
                                        }} 
                                        updateCommand={(r) => {
                                            this.recipeStore.updateRecipe(r);
                                            this.setState({ 
                                                recipes : this.recipeStore.getAllRecipes()
                                            });
                                        }}  />
                                );
                            })
                        }
                    </div>
                </div>                
            </div>
        );
    }
}

export default RecipeBox;