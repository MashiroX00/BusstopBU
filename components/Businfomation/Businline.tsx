// components/MovingBus.tsx
import { RefObject } from "react";
import { useRefPositionBetween } from "@/lib/hooks/useRefPositionBetween";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVanShuttle} from '@fortawesome/free-solid-svg-icons'
import { FlipProp } from "@fortawesome/fontawesome-svg-core";
type MovingBusProps = {
  startRef: RefObject<HTMLElement | null>;
  endRef: RefObject<HTMLElement | null>;
  progress: number;
  endOffsetX?: number;
  endOffsetY?: number;
  flip?: FlipProp;
};

export const MovingBus: React.FC<MovingBusProps> = ({
  startRef,
  endRef,
  progress,
  endOffsetX = 0,
  endOffsetY = 0,
  flip
}) => {
  const position = useRefPositionBetween(startRef, endRef, progress, {
    endOffsetX,
    endOffsetY,
  });

  return (
    <div
      className="absolute shadow-lg flex items-center justify-center transition-all duration-100"
      style={{
        transform: `translate(${position.x}px`,
      }}
    >
      <div className="flex flex-col text-center"><p className="text-xs">1</p><FontAwesomeIcon icon={faVanShuttle} flip={flip}/></div>
      
    </div>
  );
};
