import React, { useState } from 'react';

const EmployeeForm = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [employeeList, setEmployeeList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setEmployeeCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeCode.trim()) {
      setErrorMessage('Mã nhân viên không được để trống');
      return;
    }

    if (employeeList.includes(employeeCode)) {
      setErrorMessage('Mã nhân viên đã tồn tại trong hệ thống');
      return;
    }

    // Thêm mã nhân viên mới vào mảng
    setEmployeeList([...employeeList, employeeCode]);

    // Hiển thị thông báo thành công
    setErrorMessage('Thêm mã nhân viên thành công');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mã nhân viên:
          <input type="text" value={employeeCode} onChange={handleInputChange} />
        </label>
        <button type="submit">Thêm Mã Nhân Viên</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default EmployeeForm;
