import React from 'react'
import GetUsers from './components/GetUsers'
import CreateUsers from './components/CreateUsers'
import DeleteUsers from './components/DeleteUsers'
import UpdateUsers from './components/UpdateUsers'

export default function App() {
  return (
    <div>

      App

      <GetUsers></GetUsers>
      {/* <CreateUsers></CreateUsers> */}
      <DeleteUsers></DeleteUsers>
      <UpdateUsers></UpdateUsers>
    </div>
    /*
      khi lưu dữ liệu trên json-server thì phải thực hiện:
        CRUD(thêm, lấy, sửa, xóa)
        1. dùng phương thức fetch(có sẵn trong javascrip)
        2. dùng thư hiện axios để tương tác CRUD

    */
  )
}
