import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeForm = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [employeeList, setEmployeeList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setEmployeeCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mã nhân viên
    if (!employeeCode.trim()) {
      setErrorMessage('Mã nhân viên không được để trống');
      return;
    }

    if (!employeeCode.startsWith('NV')) {
      setErrorMessage('Mã nhân viên không đúng định dạng');
      return;
    }

    if (employeeCode.length < 8) {
      setErrorMessage('Mã nhân viên không được ngắn hơn 8 ký tự');
      return;
    }

    if (employeeCode.length > 16) {
      setErrorMessage('Mã nhân viên không được dài hơn 16 ký tự');
      return;
    }

    // Nếu mã nhân viên hợp lệ, thêm vào mảng
    setEmployeeList([...employeeList, employeeCode]);

    // Hiển thị thông báo thành công
    setErrorMessage('Thêm mã nhân viên thành công');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="employeeCode" className="form-label">
            Mã nhân viên:
          </label>
          <input
            type="text"
            className="form-control"
            id="employeeCode"
            value={employeeCode}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm Mã Nhân Viên
        </button>
      </form>
      {errorMessage && <p className="mt-3 text-danger">{errorMessage}</p>}
    </div>
  );
};

export default EmployeeForm;
