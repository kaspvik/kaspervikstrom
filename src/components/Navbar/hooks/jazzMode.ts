import { useState, useEffect, useRef } from "react";

export function useJazzMode() {
  const [jazzMode, setJazzMode] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.documentElement.dataset.jazz = String(jazzMode);
    if (audioRef.current) {
      if (jazzMode) {
        audioRef.current.muted = false;
        setMuted(false);
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [jazzMode]);

  function toggleMute() {
    if (!audioRef.current) return;
    const next = !muted;
    audioRef.current.muted = next;
    setMuted(next);
  }

  return { jazzMode, setJazzMode, muted, toggleMute, audioRef };
}
