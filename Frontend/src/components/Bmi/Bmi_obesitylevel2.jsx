import React from 'react'

function Bmi_obesitylevel2() {
    return (
        <div>
            <div className={styles.Bmi1}>
            <h2> ค่าดัชนีมวลกาย (BMI) </h2>
            < Image className='ant-image-img'
              width="60%"
              src="/public/10.jpg"
            /><br />
            <div className={styles.childbmi}>BMI  25 - 29.90</div>
            <div className={styles.childbmi}>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 2</div>
            <div className={styles.childbmi}>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 2</div>
            <br />
    
            <div >
              <Link to="/Advice_obesitylevel2">
              <button className={styles.advicebutton}>คำแนะนำ</button>
              </Link>
            
            
            <Link to="/"> {/* Changed the route for the "No" response */}
            <button className={styles.nextbutton}>ถัดไป</button> 
              </Link>
            </div>
          </div>
          <div className={styles.chevronicon}>
            <Link to="/BMI_calculator">
            <Button // Changed button to Ant Design's Button component
              shape="circle"
              style={{ left: 10, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
              icon={<VscChevronLeft />}
            />
          </Link>
          </div>
        </div>
      )
    }

export default Bmi_obesitylevel2