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
        var markp = (
            <div className="card">
                <div className="card-header" role="tab" id={'rcp' + this.props.recipe.id}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#recipeBox" href={'#rcpClps' + this.props.recipe.id} aria-expanded="true" aria-controls={'rcpClps' + this.props.recipe.id}>
                        {this.props.recipe.name}
                        </a>
                    </h5>                        
                </div>

                <div id={'rcpClps' + this.props.recipe.id} className="collapse show" role="tabpanel" aria-labelledby={'rcp' + this.props.recipe.id}>
                    <div className="card-block">
                        
                        {this.state.isEditMode && 
                            <div>
                                <div>
                                    <button 
                                        onClick={this.updateRecipeCommandHandler.bind(this)}
                                        className="btn btn-default">
                                        <i className="fa fa-floppy-o"></i></button>
                                    <button className="btn btn-default"
                                        onClick={this.cancelUpdateRecipeCommandHandler.bind(this)}>
                                        <i className="fa fa-undo"></i></button>
                                </div> 
                                <div>
                                    <input type='text' defaultValue={this.props.recipe.name} onChange={this.recipeNameChangeHandler.bind(this)} />
                                </div>
                                <div>
                                    <textarea defaultValue={this.props.recipe.ingredients.join(',')} onChange={this.ingredientsChangeHandler.bind(this)} />
                                </div>
                            </div>
                        }
                        {!this.state.isEditMode && 
                            <div>
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
                                <ul className="list-group">
                                    {this.props.recipe.ingredients.map((i, indx) => {
                                        return <li key={indx} className="list-group-item">{i}</li>
                                    })}
                                </ul>
                            </div>
                        }

                        
                    </div>
                </div>
            </div>
        )
                    
        return markp;
    }
}
export default Recipe;