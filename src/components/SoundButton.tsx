import { useState } from "react";
import { Icons } from "@/components/Icons";

export const SoundButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <button
      className="absolute bottom-16 left-12 cursor-pointer rounded-full bg-primary/25 p-2 backdrop-blur-md"
      id="sound-button"
      onClick={() => setIsMuted(prev => !prev)}
    >
      {isMuted ? (
        <Icons.mute className="h-6 w-6 shrink-0" />
      ) : (
        <Icons.sound className="h-6 w-6 shrink-0" />
      )}
    </button>
  );
};
