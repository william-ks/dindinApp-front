import './style.css';
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface Props {
  children: JSX.Element;
  close: any;
}

const Modal: React.FC<Props> = ({ children, close }) => {
  return (
    <div className="modal">
      <div className="modalBox">
        <div className="iconClose">
          <IoIosCloseCircleOutline onClick={() => close(false)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
