import './App.css';
import react, {useState} from 'react';
import axios from 'axios';

function App() {

  const[data,setData] = useState( {
    user_id:"",
    title:"",
    body:""
  });

  const submitHandle = (e) => {
    e.preventDefault();
    const newData = {user_id:parseInt(data.user_id),title:data.title,body:data.body};
    axios.post("https://jsonplaceholder.typicode.com/posts",newData)
    .then((response) => {console.log(response.data)})
    .catch((error) => {console.log(error)});
  }
  function changeContent(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value;
    setData(newData)
    console.log(newData);
  }

  return (
    <form onSubmit={submitHandle}>
      <div>
        <label>User id :</label>
        <input type="text" 
          placeholder='user_id'
          onChange={(e) => changeContent(e)}
          id='user_id'
          value={data.user_id}
          />
      </div>
      <div>
        <label>Title :</label>
        <input type="text"
          onChange={(e) => changeContent(e)}
          id='title'
          value={data.title}/>
      </div>
      <div>
        <label>Body :</label>
        <input type="text"
          onChange={(e) => changeContent(e)}
          id='body'
          value={data.body}/>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;
