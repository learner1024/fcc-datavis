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
    render(){
        var markp;
        if(this.state.isEditMode){
            markp = (
                <div>
                    <button onClick={() => {
                        this.props.updateCommand({id : this.props.recipe.id, name : this.state.recipeName, ingredients: this.state.ingredients});
                        this.setState({isEditMode : false});    
                    }}>save</button>
                    <button onClick={() => {
                        this.setState({isEditMode : false});
                    }}>cancel</button>
                    <div>
                        <input type='text' defaultValue={this.props.recipe.name} onChange={(e) => {
                            this.setState({recipeName: e.target.value})
                        }} />
                    </div>
                    <div>
                        <input type='text' defaultValue={this.props.recipe.ingredients.join(',')} onChange={(e) => {
                            this.setState({ingredients: e.target.value.split(',')})
                        }} />
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