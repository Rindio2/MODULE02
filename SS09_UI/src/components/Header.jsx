import React from 'react';
import './Header.scss';



export default function Header() {
  return (
    <div className='form'>
      <div className='main'>
        <div className='logo'>
          <img src="../../../public/img/Ảnh chụp màn hình 2023-09-04 014620.png" alt="" />
        </div>
        <label className='tieude'>Đăng nhập tài khoản</label>
        <div className='item'>
          <label>Email</label>
          <input type="text" /> <br />
          <label>Password</label>
          <input type="text" name="" id="" /><br />

          <div className='fogetpassword'>
            <a href="http://">Quên mật khẩu</a>
          </div>
          <button className='dangnhap'>Đăng nhập</button><br />
          <div>--------Hoặc--------</div>
          <div>
            <button> <i class="fa-brands fa-google"></i> Đăng nhập với google</button>
            <button> <i class="fa-brands fa-facebook"></i> Đăng nhập với Facebook</button>
          </div>
          <div className='ria'>
            <label htmlFor="">Bạn chưa có tài khoảng?<a href="">Đăng ký</a></label>
          </div>
        </div>
        <div className='auth'></div>
      </div>
    </div>
  );
}
