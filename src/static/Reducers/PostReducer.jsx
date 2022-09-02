const PostReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_USER':
            return state.concat([action.data])
        case 'DELETE_USER':
            return state.filter((post)=>post.id !== action.id);
        case 'EDIT_USER':
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case 'UPDATE_USER':
            return state.map((post)=>{
                if(post.id === action.id){
                    return{
                        ...post,
                        Firstname: action.data.newFirstname,
                        Lastname: action.data.newLastname,
                        Email: action.data.newEmail,
                        Gender: action.data.newGender,
                        editing: !post.editing
                    }
                }
                else {
                    return post;
                }
            })            
        default:
            return state    
    }
}
export default PostReducer;