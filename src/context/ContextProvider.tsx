import { useState } from "react";
import { RoleContext } from "./Context";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [isClient, setIsClient] = useState(true);

  const handleSwitch = () => {
    setIsClient((prevState) => !prevState);
  };

  const value = {
    isClient,
    handleSwitch,
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export default ContextProvider;
