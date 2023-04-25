import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Container: FC<Props> = ({ children }) => (
  <div className="mx-auto max-w-4xl px-4">{children}</div>
);

export default Container;
