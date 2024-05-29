import { useState } from "react";
import { Icons } from "@/components/Icons";

export const SoundButton = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <button
      className="absolute bottom-8 left-4 cursor-pointer rounded-full bg-primary/25 p-2 backdrop-blur-md md:bottom-16 md:left-8 lg:left-12"
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
