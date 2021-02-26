import React,{useState,useEffect} from 'react'
import './Content.css'



function Content({show}) {
    const [newblog, setNewblog]= useState({});
    const [blog, setBlog] = useState([]);

    const handleChange=({target})=>{
        const {name,value} = target
        setNewblog((prev)=>({ ...prev,[name]: value}));
    }
    
    const update=(event)=>{
        event.preventDefault();
        setBlog((prev)=>[newblog,...prev])
        
    }

    console.log(newblog)
    return (
        <div className='Content'>
            <h2 id='title'><span id='whatIf'>What if</span> {blog[0]?.title}</h2>
             <div className='Content-main'>
                 <p>{blog[0]?.body}</p>

             </div>
             {show && (
                 <div>
                            
                 <form onSubmit={update}>
                     <textarea
                         value={newblog.title || ""}
                         name='title'
                         onChange={handleChange}
                         />
                     <textarea
                     value={newblog.body || ""}
                     name='body'
                     onChange={handleChange}
                     />
                     <button type='submit'>Post</button>
                 </form>
             </div>
             )}
                        
                     

        </div>
    )
}

export default Content;
