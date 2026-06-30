import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTransition } from './TransitionContext';
import styles from './VideoTransitionOverlay.module.css';
import transitionClip from '../assets/transition.mp4';

const MIDPOINT_SECONDS = 0.27;

export default function VideoTransitionOverlay() {
    const navigate = useNavigate();
    const { isTransitioning, transitionPhase, onMidpointReached, onTransitionComplete } = useTransition();

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const rafIdRef = useRef(null);

    const navigateRef = useRef(navigate);
    const onMidpointRef = useRef(onMidpointReached);
    const onCompleteRef = useRef(onTransitionComplete);
    navigateRef.current = navigate;
    onMidpointRef.current = onMidpointReached;
    onCompleteRef.current = onTransitionComplete;

    const KEY_COLOR = { r: 34, g: 177, b: 76 };
    const KEY_TOLERANCE = 90; 

    useEffect(() => {
        if (!isTransitioning) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        video.currentTime = 0;
        video.play().catch(() => {});

        const drawFrame = () => {
            if (video.paused || video.ended) return;

            if (video.videoWidth === 0 || video.videoHeight === 0) {
                rafIdRef.current = requestAnimationFrame(drawFrame);
                return;
            }

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = frame.data;
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i], g = data[i + 1], b = data[i + 2];
                const dist = Math.sqrt(
                    (r - KEY_COLOR.r) ** 2 +
                    (g - KEY_COLOR.g) ** 2 +
                    (b - KEY_COLOR.b) ** 2
                );
                if (dist < KEY_TOLERANCE) {
                    data[i + 3] = 0;
                }
            }
            ctx.putImageData(frame, 0, 0);

            if (video.currentTime >= MIDPOINT_SECONDS) {
                onMidpointReached(navigate);
            }

            rafIdRef.current = requestAnimationFrame(drawFrame);
        };

        const handleEnded = () => {
            cancelAnimationFrame(rafIdRef.current);
            onTransitionComplete();
        };

        video.addEventListener('ended', handleEnded);
        rafIdRef.current = requestAnimationFrame(drawFrame);

        return () => {
            cancelAnimationFrame(rafIdRef.current);
            video.removeEventListener('ended', handleEnded);
            video.pause();
        };
    // }, [isTransitioning, navigate, onMidpointReached, onTransitionComplete]);
    }, [isTransitioning]);

    if (!isTransitioning) return null;

    return (
        <div className={styles.overlay} data-phase={transitionPhase}>
            <video
                ref={videoRef}
                src={transitionClip}
                muted
                playsInline
                className={styles.hiddenSource}
            />
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
}