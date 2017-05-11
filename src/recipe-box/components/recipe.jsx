import React, {Component} from 'react';

class Recipe extends Component{
    constructor(props){
        super(props);

        this.state = {
            recipeName: this.props.recipe.name,
            isEditMode: false
        }
    }
    render(){
        var markp;
        if(this.state.isEditMode){
            markp = (
                <div>
                    <input type='text' defaultValue={this.props.recipe.name} onChange={(e) => {
                        this.setState({recipeName: e.target.value})
                    }} />
                    <button onClick={() => {
                        this.props.updateCommand({id : this.props.recipe.id, name : this.state.recipeName});
                        this.setState({isEditMode : false});    
                    }}>save</button>
                    <button onClick={() => {
                        this.setState({isEditMode : false})
                        this.setState({recipeName: this.props.recipe.name})
                    }}>cancel</button>
                </div>
            )
        
        }
        else{
            markp = (
                <div>
                    <span>{this.props.recipe.id} - {this.props.recipe.name}</span>
                    <button onClick={() => this.setState({isEditMode : true})}>edit</button>
                    <button onClick={() => {
                        if(window.confirm('are you sure?')){
                            this.props.deleteCommand(this.props.recipe.id);
                        }
                    }}>delete</button>
                </div>
            )
        } 
                    
        return markp;
    }
}
export default Recipe;