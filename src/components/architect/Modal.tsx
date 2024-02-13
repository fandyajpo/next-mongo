import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  id?: string;
}
const Modal = (props: Props) => {
  return (
    <dialog id={props?.id} key={props?.id} className="border shadow-sm rounded">
      {props.children}
    </dialog>
  );
};

export default Modal;
