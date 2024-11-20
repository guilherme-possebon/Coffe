import styled, { keyframes } from "styled-components";

// Slide-in and slide-out animations
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 999;
`;

export const DrawerContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
