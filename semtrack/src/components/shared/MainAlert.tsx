import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MainAlert() {
  return (
    <>
      <div className="alert shadow-sm mb-8 ">
      <FontAwesomeIcon icon={faCircleInfo} className="text-primary" />
        <div>
          <div className="text-xs">
          Semtrack is currently in an open beta. if you have any feedback, 
          please provide it <a href="https://forms.gle/Y9juM1ZMXdsRhEdS9" 
            target="_blank" 
            className="link link-primary">here</a>. 
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAlert;
