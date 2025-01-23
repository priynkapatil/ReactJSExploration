import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import banner from '../../assets/banner-header.svg';
import CommonButton from '../Button/CommonButton';
const BannerForm = () => {
  return (
    <div>
      <div className="button-ly">
        <CommonButton logo={<MdMessage/>} label='VIA SUPPORT CHAT' />
        <CommonButton logo={<IoMdCall/>} label='VIA CALL' />
      </div>
      <CommonButton logo={<MdMessage/>} label="VIA EMAIL FORM" width="472px"/>
      <div>
        <img src={banner} alt='banner' />
      </div>
    </div>
  );
};

export default BannerForm;
