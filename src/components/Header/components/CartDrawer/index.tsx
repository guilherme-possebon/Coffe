import { useEffect, useRef } from "react";
import { CloseButton, DrawerContent, DrawerOverlay } from "./styles";
import { Cart } from "../../../Cart";

export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <DrawerOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <DrawerContent ref={drawerRef} $isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Cart />
      </DrawerContent>
    </DrawerOverlay>
  );
}
