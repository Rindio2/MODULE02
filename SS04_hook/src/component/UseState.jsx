import React from 'react'
import { useState } from 'react'

export default function UseState() {
    const [count,setCount] = useState(23);
    const [job, setJob] = useState("");
    /*
        useState sẽ trả về cho mình một cái mảng có 2 phần tử
        phần tử 1 : giá trị khởi tạo
        phần tử 2 : hàm sử lý
        - khi dùng setCount(): thì component tự re-render cho nên phía IU tự động cập nhật giá trị
    */
    // nắm kĩ destructoring 
    let arr=[1,"hoa"];
    let [a,b]=arr;
    const increse=()=>{
        
        setCount(count+1);
    }
    

    // Function to handle button click and display task
    const saveTask = () => {
        console.log('Saved Task:', task);
    };
    const handleChange = (event) => {
        let inputValue = event.target.value;
        setJob(inputValue);
    }
    const addJob=()=>{
        setJob([...job,job]);
        setJob("");
    }

  return (
    <div>
        
        <div>
            UseState
            <p>{count}</p>
            <button onClick={increse}>click</button>

            <input type="text" onChange={handleChange} value={job} />
            <button onClick={addJob}>add</button> <br />

            
            <ul>
                {job.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
        </div>

    </div>
  )
};
// import React, { useState } from 'react';

// const YourComponent = () => {
    
//     const [count, setCount] = useState(0);

    
//     const [task, setTask] = useState('');

    
//     const [tasks, setTasks] = useState([]);

    
//     const increase = () => {
//         setCount(count + 1);
//     };

    
//     const handleInputChange = (event) => {
//         setTask(event.target.value);
//     };

    
//     const saveTask = () => {
//         setTasks([...tasks, task]);
//         setTask(''); 
//     };

//     return (
//         <div>
            
//             <p>{count}</p>

            
//             <button onClick={increase}>Click</button> <br />

            
//             <label htmlFor="taskInput">Nhập công việc</label>
//             <input
//                 type="text"
//                 id="taskInput"
//                 value={task}
//                 onChange={handleInputChange}
//             />

            
//             <button onClick={saveTask}>Lưu công việc</button>

            
//             <div>
//                 <h2>Công việc đã nhập:</h2>
//                 <ul>
//                     {tasks.map((task, index) => (
//                         <li key={index}>{task}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default YourComponent;
