import React,{useState} from 'react';
import './Profile.css';
import GradeIcon from '@material-ui/icons/Grade';

function Profile({img}) {
    const [like, setLike,] = useState(0);

    const addLike=()=>{
        setLike(like=> like+1)
    }
    return (
        <div className='Profile'>
            <img id='me'src={img} alt='mrisholukamba'/>
            <div>
                <span onClick={addLike}><GradeIcon color="primary"/>{like}</span>
                <h5>Published : feb/201?/"2~@</h5>
            </div>    
        </div>
    )
}

export default Profile
