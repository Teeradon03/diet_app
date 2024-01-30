
import { VscChevronLeft } from 'react-icons/vsc';

export default function GoBack() {

  const handlePreviousClick = () => {
    // ทำการกลับไปหน้าก่อนหน้านี้
    window.location.href = 'form';
  };

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

  return (
    <div className="row">
      <div className="col-2 ">
        <button
          className="chevron-icon"
          style={buttonStyle}
          onClick={handlePreviousClick}
        >
          <VscChevronLeft />
          {/* ไอคอนย้อนกลับ */}
        </button>
      </div>
    </div>
  );
}
