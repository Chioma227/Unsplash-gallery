import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function MyFooter() {
  return (
    <div className="pt-[9px] fixed bottom-0 flex flex-col items-center justify-center w-[100%] ">
      <div className="flex justify-center gap-[20px] text-[25px] items-center">
        <a
          href="https://web.facebook.com/profile.php?id=100068477616692"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-gray-400" />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="text-gray-400" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCv34M0a7h0tRfy4T1iThvBQ"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} className="text-gray-400" />
        </a>
        <a href="https://twitter.com/_ChiomaOkeke_" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="text-gray-400" />
        </a>
      </div>
      {/* <div className="flex justify-center items-center sm:mt-5 mt-3">
        <h5 className="sm:text-[16px] text-[12px]">Conditions of Use</h5>
        <h5 className="ml-3 sm:text-[16px] text-[12px]">Privacy Policy</h5>
        <h5 className="ml-3 sm:text-[16px] text-[12px]">Press Room</h5>
      </div> */}
      <p className="sm:mt-5 mt-3 text-gray-400 mb-[10px]">
        &copy; 2023 MovieBox by OmAh_Codes
      </p>
    </div>
  );
}
