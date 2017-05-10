import React, {Component} from 'react';

class Recipe extends Component{
    constructor(props){
        super(props);

        let {recipe, onShowDetailsCommand, onEditCommand, onDeleteCommand, onSaveCommand} = props;
        this.state = {
            recipe,
            isEditMode: false
        }
    }
    render(){
        var markp;
        if(this.state.isEditMode){
            markp = <div><input type='text' defaultValue={this.state.recipe.name} /><button onClick={() => this.setState({isEditMode : false})}>save</button></div>
        
        }
        else{
            markp = <div><span>{this.state.recipe.id} - {this.state.recipe.name}</span><button onClick={() => this.setState({isEditMode : true})}>edit</button></div>
        } 
                    
        return markp;
    }
}
export default Recipe;