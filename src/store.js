import {createStore} from "redux";

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions:[],
    recipes: [],
    recipe_id:''
};

// action type consonants
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";
// export const DELETE_RECIPE = "DELETE_RECIPE";

function reducer(state = initialState, action){
    const {type,payload} = action;

    switch(type){
        case UPDATE_NAME:
            return{...state, recipeName: payload}

        case UPDATE_CATEGORY:
            return {...state,recipeCategory: payload}

        case UPDATE_FIRST_NAME:
            return {...state,authorFirst: payload}

        case UPDATE_LAST_NAME:
            return {...state,authorLast: payload} 

        case ADD_INGREDIENT:
        //we need to make a copy of the list before making changes
            const newIngredients = [...state.ingredients, payload];
            return {...state, ingredients: newIngredients}

        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions,payload];
            return {...state, instructions: newInstructions}

        case ADD_RECIPE:
        //we need to pull all the values we've been storing so far off ot state and build a recipe obj with it.
        const {recipeName,recipeCategory,authorFirst,authorLast,ingredients,instructions} = state;
        const recipe = {recipeName,recipeCategory,authorFirst,authorLast,ingredients,instructions};
        //then, we want to copy our list of recipes and add a new recipe to it.
        const newRecipes = [...state.recipes, recipe];
        //we also need to copy the rest of state in an immutable way.
        return { ...state, recipes: newRecipes};

        // case DELETE_RECIPE:
        //     return {recipes: state.recipes.filter(recipe => recipe !== payload}

        default:
            return state;
    }
}

export default createStore(reducer);