import React, {Component} from 'react';

class Recipe extends Component{
    constructor(props){
        super(props);

        this.state = {
            recipeName: this.props.recipe.name,
            ingredients: this.props.recipe.ingredients,
            isEditMode: false
        }
    }
    updateRecipeCommandHandler(){
        this.props.updateCommand({id : this.props.recipe.id, name : this.state.recipeName, ingredients: this.state.ingredients});
        this.setState({isEditMode : false});    
    }
    cancelUpdateRecipeCommandHandler(){
        this.setState({isEditMode : false});
    }
    recipeNameChangeHandler(e){
        this.setState({recipeName: e.target.value});
    }
    ingredientsChangeHandler(e){
        this.setState({ingredients: e.target.value.split(',')})
    }
    render(){
        var markp;
        if(this.state.isEditMode){
            markp = (
                <div>
                    <button onClick={this.updateRecipeCommandHandler.bind(this)}>save</button>
                    <button onClick={this.cancelUpdateRecipeCommandHandler.bind(this)}>cancel</button>
                    <div>
                        <input type='text' defaultValue={this.props.recipe.name} onChange={this.recipeNameChangeHandler.bind(this)} />
                    </div>
                    <div>
                        <textarea defaultValue={this.props.recipe.ingredients.join(',')} onChange={this.ingredientsChangeHandler.bind(this)} />
                    </div>
                    
                </div>
            )
        
        }
        else{
            markp = (
                <div>
                    <button onClick={() => this.setState({isEditMode : true})}>edit</button>
                    <button onClick={() => {
                        if(window.confirm('are you sure?')){
                            this.props.deleteCommand(this.props.recipe.id);
                        }
                    }}>delete</button>
                    <div>
                        <h1>{this.props.recipe.name}</h1>
                        <ul>
                            {this.props.recipe.ingredients.map((i, indx) => {
                                return <li key={indx}>{i}</li>
                            })}
                        </ul>
                    </div>
                </div>
            )
        } 
                    
        return markp;
    }
}
export default Recipe;