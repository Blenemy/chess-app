import { ReactNode } from "react";
import "./Container.scss";

interface IContainerprops {
  children: ReactNode;
}

const Container: React.FC<IContainerprops> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
