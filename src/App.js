import { useState } from 'react';
import './App.css';

function App() {
  const dealy = time => new Promise(resolve => setTimeout(resolve, time));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getUsers() {
    setUsers([]);
    setLoading(true);
    const data = (await (await fetch('https://reqres.in/api/users?page=1')).json()).data;
    await dealy(1000);
    setUsers(data);
    setLoading(false);
  }
  
  return (
    
    <div className="app">
      <nav>
        <div className="title"> LGM Task 2 - Ananya Ghosh</div>
        <button onClick={() => getUsers()} className="btn push">
          Get Users
        </button>
      </nav>
      <div className="users">
        {users.map(user => (
          <div>
            <div className="avatar">
              <img src={user.avatar} alt={user.first_name} />
            </div>
            <div className="info">
              <div className="name">{user.first_name + ' ' + user.last_name}</div>
              <div className="email">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="loading">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;