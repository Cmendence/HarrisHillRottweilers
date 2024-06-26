import ADRKLogo from "../assets/images/adrk-logo.png";
import AKCLogo from "../assets/images/AKC-Logo.png";
import FCILogo from "../assets/images/fci-Logo.png";
import KSSLogo from "../assets/images/KSS-logo.png";

export default function Licenses() {
  return (
    <div>
      <hr className="border-1 border-rose-900 mx-8" />
      <div className="flex justify-center lg:h-20 m-4 h-14">
        <img className="mr-8" src={AKCLogo} alt="AKC Logo" />
        <img className="mr-8" src={KSSLogo} alt="KSS Logo" />
        <img className="mr-8" src={FCILogo} alt="FCI Logo" />
        <img src={ADRKLogo} alt="ADRK Logo" />
      </div>
    </div>
  );
}
