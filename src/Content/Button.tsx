import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  height: calc(32 / 1440 * 100vw);
  background: #f1f1f1;
  border: 0.064vw solid #e2e2e2;
  border-radius: calc(0.694vw / 2);
  padding: calc(20 / 1440 * 100vw) auto;
  margin: calc(5 / 1440 * 100vw) auto;
  font-size: calc(16 / 1440 * 100vw);

  &:hover {
    cursor: pointer;
    background: #757c88;
    color: #ffffff;
  }
`;

interface BtnProps {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({ children, ...props }) => {
  return <StyledBtn {...props}>{children}</StyledBtn>;
};

export default Button;
