/* 
    bản chất là những cái hàm hay gọi là function
    khi dùng hàm phải để ý đầu vào là gì, đầu ra là gì

    1.useState
    2.useEffect
        - tương tự componentDidMount(hàm này sẽ được gọi component được render lần đầu)
        - có 3 cách dùng 
            + c1: useEffect=()=>{

            }
            + c2: useEffect(()=>{

                },[]
            )
            + c3: useEffect(()=>{

                },[depen]
            )
    3.useContext
        - giúp truyền dữ liệu từ các cây component có liên kết cha con
    4.useRef
        let ref= useRef(0)
        - kết quả trả về là 1 cái object trong này có thuộc tính current==>{current:""}
        - tạo 1 biến đếm khi component được re-render thì kết quả của useRef sẽ lấy kết quả sau
        - tự động focus vào o input mình muốn (ô input có thuộc tính mặc định là ref)
    5.memo
        - HOC: kiểm tra component có props nào thay đổi hay không thì mới re-render component
    6.useCallback
        - giải quyết vấn đề của memo khi truyền props kiểu refercen type
    7.useMemo
        - ghi nhớ giúp cho compent khi re-render mà có tính toán phức tạp không phải tính toán lại
    8.useReducer
        - quản lý những state phức tạp
        - giúp cho việc học redux bài sau


*/