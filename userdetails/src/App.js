// import TableComponent from './components/table'
import React, { useState, useEffect } from 'react';
import DataTable from './components/table'
import UserDetails from './components/userdetails'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isViewUserClicked, setUserState] = useState(false)
  const [userId, setUserIDState] = useState(null)
  const [todoId, setTodoIDState] = useState(null)
  const [todoTitle, setTodoTitleState] = useState(null)

  useEffect(() => {
    // Fetch data here
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response =>response.json() )
      .then(data =>{
        setData(data)
      });
  }, []);

  const handleViewUser = (userId, todoId, title) => {
    // console.log(userId);
    setUserState(true)
    setUserIDState(userId)
    setTodoIDState(todoId)
    setTodoTitleState(title)
  };

  const columns = [
    {
      Header: 'Todo ID',
      accessor: 'id',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Status',
      accessor: d => d.completed ? 'complete' : 'incomplete',
    },{
      Header: 'Action',
      accessor: d => ({
        userId: d.userId,
        todoId: d.id,
        title: d.title,
      }),
      Cell: ({ value }) => (
        <button onClick={() => handleViewUser(value.userId, value.todoId, value.title)}>
          View User
        </button>
      ),
      // accessor: 'userId',
      // Cell: ({value}) => <button onClick={() => handleViewUser(value)}>View User</button>
    }
  ];
  // console.log(data)

  
  return (
    <>
    <div className='table'>
    <div>
    <div id='main1' class="clearfix">
       
       <div id="div2">
         
         ReactCodingChallenge
         
       </div>
       <div id="div3">
         <span class="dot"></span>
         <span class="dot"></span>
         <span class="dot"></span>
       </div>
     </div>  

    <div className="App">
      <div className="table-container" >
        {/* <TableComponent/> */}
        <DataTable data={data} columns={columns}/>
        
      </div>
      <div className="userdetails-container">
        {isViewUserClicked ? <UserDetails userId = {userId} todoId = {todoId} todoTitle = {todoTitle}/> : null}
        
      </div>
    </div>
    </div>
    </div>
    </>
  );
 
}

export default App;
