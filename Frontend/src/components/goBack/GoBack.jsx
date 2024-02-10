
import { VscChevronLeft } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
export default function GoBack() {
  const navi = useNavigate()
  const handlePreviousClick = () => {
    // ทำการกลับไปหน้าก่อนหน้านี้
    navi('/form')
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
