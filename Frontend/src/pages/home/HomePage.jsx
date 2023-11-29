
import SlideButton from 'react-slide-button';
import { useNavigate } from "react-router-dom";
import NanoLogo from "../../components/logo/NanoLogo";
function HomePage() {
    const linkTo = useNavigate()

    return (
        <>
            <div className='container text-center'>
                <div className='row '>
                    <div className='col-12 mt-5 pt-5'>
                        <NanoLogo />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 mt-5 pt-5'>
                        <h4 className='text-center'>Welcome to program weight lose</h4>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-12 mt-5 pt-5' style={{ width: '300px' }}>
                    <SlideButton
                            mainText="เข้าสู่ระบบ"
                            overlayText="F U C K"
                            classList="my-class"
                            caretClassList="my-caret-class"
                            overlayClassList="my-overlay-class"
                            onSlideDone={() => linkTo('/login')}
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;
