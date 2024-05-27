import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

interface CardProps {
  label: string;
  image: string;
  subLabel: string;
  caption: string;
}

export default function Card(props: CardProps) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="bg-secondary bg-opacity-20 shadow-lg flex flex-col items-center text-center gap-2 rounded-lg p-4 *:text-primary">
      <img src={`/${props.image}`} width={100} className="rounded-full" />
      <h1 className="text-xl font-bold ">{props.label}</h1>
      <h2>{props.subLabel}</h2>
      {!showDescription && (
        <button onClick={() => setShowDescription(true)}>
          <FaArrowCircleDown size={28} />
        </button>
      )}
      <p className={showDescription ? "animate-slidein" : "animate-slideout"}>
        {props.caption}
      </p>
      {showDescription && (
        <button onClick={() => setShowDescription(false)}>
          <FaArrowCircleUp size={28} />
        </button>
      )}
    </div>
  );
}
