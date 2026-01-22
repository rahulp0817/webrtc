'use client';

import { useEffect, useState } from "react";

type LocalMediaState = {
  stream: MediaStream | null;
  error: string | null;
  loading: boolean;
}

const useLocalMedia = () => {
  const [state, setState] = useState<LocalMediaState>({
    stream: null,
    error: null,
    loading: false,
  })

  useEffect(() => {
    let active = true;

    async function initMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { ideal: 60 }
          },
          audio: true,
        });

        if (!active) return;

        setState({
          stream,
          error: null,
          loading: false,
        })
      } catch (error) {
        setState({
          stream: null,
          error: 'Camera and Microphone Status denied',
          loading: false
        })
      }
    }

    initMedia();

    return () => {
      active = false
      setState((prev) => {
        prev.stream?.getTracks().forEach((track) => track.stop())
        return prev;
      })
    }
  }, [])

  return state;

}
export default useLocalMedia;