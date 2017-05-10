import React, {Component} from 'react';
import Recipe from './recipe.jsx';

class RecipeBox extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            newRecipeName: '',
            recipes : JSON.parse(localStorage.getItem('fcc-recipebox-recipes') || '[]')
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
                            //store this new recipe in localStorage
                            let rcps = [...this.state.recipes, {id: this.state.recipes.length + 1, name: this.state.newRecipeName}]
                            localStorage.setItem('fcc-recipebox-recipes', JSON.stringify(rcps));
                            this.setState({ 
                                recipes : JSON.parse(localStorage.getItem('fcc-recipebox-recipes'))
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
                                        onShowDetailsCommand={() => {}} 
                                        onEditCommand={() => {}} 
                                        onDeleteCommand={() => {}}
                                        onSaveCommand={() => {}} />
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