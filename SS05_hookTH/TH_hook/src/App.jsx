import React, { useState } from 'react';

import './App.css';

function App() {
  const initialUsers = [
    {
      username: "tuan123",
      password: "123",
    },
    {
      username: "tran123",
      password: "1232",
    }
  ];
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    
    const authenticatedUser = initialUsers.find(
      (u) => u.username === loginData.username && u.password === loginData.password
    );

    if (authenticatedUser) {
      setLoggedInUser(authenticatedUser);
    } else {
      alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản và mật khẩu.');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      <h1>Ứng Dụng Đăng Nhập</h1>
      {loggedInUser ? (
        <div>
          <p>Xin chào, {loggedInUser.username}!</p>
          <button onClick={handleLogout}>Đăng Xuất</button>
        </div>
      ) : (
        <div>
          <label>
            Tên người dùng:
            <input
              type="text"
              value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            />
          </label>
          <br />
          <label>
            Mật khẩu:
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Đăng Nhập</button>
        </div>
      )}
    </div>
  );
}

export default App;
