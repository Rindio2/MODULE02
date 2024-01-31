import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    code: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mã nhân viên
    if (!formData.code.trim()) {
      setErrorMessage('Mã không được để trống');
      return;
    }

    if (!formData.code.startsWith('NV')) {
      setErrorMessage('Mã không đúng định dạng');
      return;
    }

    if (formData.code.length < 8) {
      setErrorMessage('Mã không được nhỏ hơn 8 ký tự');
      return;
    }

    if (formData.code.length > 16) {
      setErrorMessage('Mã không được lớn hơn 16 ký tự');
      return;
    }

    // Kiểm tra email
    if (!formData.email.trim()) {
      setErrorMessage('Email không được để trống');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Email không đúng định dạng');
      return;
    }

    // Kiểm tra mật khẩu
    if (formData.password.length < 8) {
      setErrorMessage('Mật khẩu không được nhỏ hơn 8 ký tự');
      return;
    }

    // Nếu tất cả các kiểm tra đều hợp lệ
    setErrorMessage('Đăng ký thành công');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mã nhân viên:
          <input type="text" name="code" value={formData.code} onChange={handleInputChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>

        <label>
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Đăng ký</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Form;
z