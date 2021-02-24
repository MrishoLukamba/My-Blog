import React,{useState} from 'react'
import './Comment.css'
import AddCommentIcon from '@material-ui/icons/AddComment';

function Comments({addComment,handleChange,newComment,comments}) {
    const [input, setInput] = useState('');
    const [username, setUsername] = useState('');


    const addName=(event)=>{
        event.preventDefault();
        setUsername(input)
    }
    const handleInput=({target})=>{
        setInput(target.value)
    }
    return (
        <div className='comments'>

             <div className='form'>
             {username ?(<form onSubmit={addComment}>
                    <textarea
                    type='text'
                    value={newComment || ''}
                    onChange={handleChange}
                    placeholder='Add your thoughts...'
                    />
                    
                    <button className='Submit' type='submit'><AddCommentIcon fontSize="small"/></button>
                    
                </form>) :
                
                (<form onSubmit={addName}>
                    <input 
                    placeholder='Add your name to comment below..'
                    className='popup-input'
                    onChange={handleInput}
                    >
                    </input> 
                    <button className='popub-button'>OK</button>
             
                </form>)
             }



               
             
                
            </div>
            {username && (<div className='display'>
                <ul>
                    {comments.map(comment=>(
                        <li>
                            <div className='show'>
                                <span id='username'>{username}</span>
                                <h2>{comment}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>)}
            
        </div>
    )
}

export default Comments
