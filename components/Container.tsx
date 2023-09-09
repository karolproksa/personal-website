import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

const Container = (props: Props) => {
  return (
    <div className={`max-w-[1024px] mx-auto px-8 w-full ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
