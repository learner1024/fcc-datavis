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
                <div className='row'>                    
                    <div className="col-3">
                        <input type='text' defaultValue={this.props.recipe.name} onChange={this.recipeNameChangeHandler.bind(this)} />
                    </div>
                    <div className="col-7">
                        <textarea defaultValue={this.props.recipe.ingredients.join(',')} onChange={this.ingredientsChangeHandler.bind(this)} />
                    </div>
                    <div className="col-2">
                        <button 
                            onClick={this.updateRecipeCommandHandler.bind(this)}
                            className="btn btn-default">
                            <i className="fa fa-floppy-o"></i></button>
                        <button className="btn btn-default"
                            onClick={this.cancelUpdateRecipeCommandHandler.bind(this)}>
                            <i className="fa fa-undo"></i></button>
                    </div>        
                </div>
            )
        
        }
        else{
            markp = (
                <div className="row">
                    <div className="col-3">
                        <h1>{this.props.recipe.name}</h1>
                    </div>
                    <div className="col-7">
                        <ul className="list-group">
                            {this.props.recipe.ingredients.map((i, indx) => {
                                return <li key={indx} className="list-group-item">{i}</li>
                            })}
                        </ul>
                    </div>
                    <div className="col-2">
                        <button 
                            onClick={() => this.setState({isEditMode : true})} 
                            className="btn btn-default">
                            <i className="fa fa-pencil"></i></button>
                        <button className="btn btn-default"
                            onClick={() => {
                            if(window.confirm('are you sure?')){
                                this.props.deleteCommand(this.props.recipe.id);
                            }}}>
                            <i className="fa fa-times"></i></button>
                    </div>
                </div>
            )
        } 
                    
        return markp;
    }
}
export default Recipe;