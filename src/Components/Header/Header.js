import SearchField from "react-search-field";
import Logotip from "../../img and video/Logotip.jpg";
import moduleName from "../../Module.css/Header/Header.module.css";
export const Header = () => {
  return (
    <div className={moduleName.Header}>
      <div className={moduleName.HeaderBody}>
        <div className={moduleName.LogoBody}>
          <img src={Logotip} alt="" className={moduleName.Logotip} />
          <p className={moduleName.Title_Text}>Покупай умнее, живи веселее!</p>
        </div>
        <div className={moduleName.searchBody}>
          <SearchField
            classNames="test-class" />
        </div>
      </div>
    </div>
  );
};
