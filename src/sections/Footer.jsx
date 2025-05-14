import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a 
                href={socialImg.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${socialImg.name}`}
              >
                <img 
                  src={socialImg.imgPath} 
                  alt={`${socialImg.name} icon`} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shagun Katariya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
