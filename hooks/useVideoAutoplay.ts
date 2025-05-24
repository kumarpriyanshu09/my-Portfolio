import { useRef, useEffect, useState } from "react";

interface VideoAutoplayOptions {
  preload?: "none" | "metadata" | "auto";
  threshold?: number;
  rootMargin?: string;
  resetOnExit?: boolean;
  playbackRate?: number;
  muted?: boolean;
}

/**
 * Custom hook for managing video autoplay with IntersectionObserver
 */
export function useVideoAutoplay(options: VideoAutoplayOptions = {}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    preload = "metadata",
    threshold = 0.3,
    rootMargin = "0px 0px 100px 0px",
    resetOnExit = false,
    playbackRate = 1,
    muted = true
  } = options;

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
      setIsMobile(
        mobileRegex.test(userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          userAgent.substr(0, 4)
        )
      );
    }
  }, []);

  // Initialize video attributes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = preload;
      videoRef.current.muted = muted;
      videoRef.current.playbackRate = playbackRate;
      videoRef.current.load();
    }
  }, [preload, muted, playbackRate]);

  // Create intersection observer
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const isIntersecting = entry.isIntersecting;
      
      setIsVisible(isIntersecting);
      
      if (isIntersecting) {
        if (!hasPlayed || resetOnExit) {
          video.currentTime = 0;
          video.play()
            .then(() => {
              setIsPlaying(true);
              setHasPlayed(true);
            })
            .catch(error => {
              console.log(`Autoplay prevented:`, error);
              // For iOS that might need user interaction first
              if (isMobile) {
                video.load();
              }
            });
        }
      } else if (resetOnExit && isPlaying) {
        video.pause();
        setIsPlaying(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin,
    });
    
    observer.observe(container);
    
    return () => observer.disconnect();
  }, [threshold, rootMargin, resetOnExit, hasPlayed, isPlaying, isMobile]);

  // Add event listener for when the video ends
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoEnd = () => {
        setIsPlaying(false);
        // Optionally, reset hasPlayed if you want the intersection observer to replay it automatically on re-scroll
        // if (resetOnExit) setHasPlayed(false);
      };

      video.addEventListener('ended', handleVideoEnd);
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [videoRef, resetOnExit]);

  // Function to manually play the video
  const playVideo = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasPlayed(true);
        })
        .catch(error => console.log("Manual play failed:", error));
    }
  };

  return { videoRef, containerRef, isVisible, isPlaying, playVideo };
}