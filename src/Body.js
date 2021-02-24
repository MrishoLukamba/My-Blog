import React,{useState} from 'react'
import './Body.css';
import Comments from './Comments';
import me from './photos/suitMe (2).jpg'
import Profile from './Profile';
import Content from './Content';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';


function Body() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('')


    const handleChange=({target})=>{
        setNewComment(target.value)
    }

    const addComment=(event)=>{
        event.preventDefault();
        if(!newComment) return;
        setComments((prev)=> [newComment,...prev ])
        setNewComment('')
    }
    return (
        <div className='Body'>
          <div className='Body-1'>

            <div className='Body-left'>
                <Profile
                img={me}
                />
                
            </div>

            <div className='Body-middle'>
                <Content/>       
            </div>

            <div className='Body-right'>
                <Comments
                  comments={comments}
                  newComment={newComment} 
                  addComment={addComment}
                  handleChange={handleChange}
                />
            </div>
          </div>
           

          <div className='Body-2'>
            <footer>
                <div>
                <TwitterIcon/>
                <FacebookIcon/>
                </div>
                <span>Mrisho Lukamba ©2021 </span>
            </footer>
          </div>
        </div>
    )
}

export default Body
