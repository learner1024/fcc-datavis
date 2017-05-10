import React from 'react';

const Recipe = ({recipe, onShowDetailsCommand, onEditCommand, onDeleteCommand, onSaveCommand}) => {
    return (
        <div>
            {recipe.id} - {recipe.name}
        </div>
    );
}

export default Recipe;