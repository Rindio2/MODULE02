import React, {memo} from 'react'

function UseCallback() {
    console.log("goi ten tui di");
    
  return (
    <>
        UseCallback
        {/* memo: chức năng kiểm tra có component nào thay đổi hay không nếu có sẽ rerender còn không thì sẽ giữ nguyên */}
    </>
  )
}
export default memo(UseCallback);
