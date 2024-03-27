import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    /* 
      Redux là một thư viện (bên thứ 3 không phải của react) giúp cho việc quản lý state tập trung hay còn gọi là kho chứa
        - trong store chứa reducer(bản chất là hàm sẽ đi tính toán cập nhật lại state dựa vào dispatch)
        - dùng với reactjs cũng được mà dùng với js cũng được
        - khi truyền dữ liệu trong reactjs thì bắt buộc phải truyền theo kiểu cha con
        - vidu:
          + ông muốn truyền qua cháu thì phải xuống bố xong mới xuống cháu
        - cần redux để giúp quản lý state tập trung
        - cách cài:
          + npm i redux react-redux


    */
    <div>
      App
      <Header></Header>

    </div>
  )
}
