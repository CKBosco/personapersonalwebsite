import { createContext, useContext, useState, useCallback, useRef } from 'react';

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [pendingPath, setPendingPath] = useState(null);
    const [transitionPhase, setTransitionPhase] = useState('idle');

    const hasNavigatedRef = useRef(false);

    const startTransition = useCallback((path) => {
        if (isTransitioning) return;
        hasNavigatedRef.current = false;
        setPendingPath(path);
        setTransitionPhase('covering');
        setIsTransitioning(true);
    }, [isTransitioning]);

    const onMidpointReached = useCallback((navigateFn) => {
        if (hasNavigatedRef.current || !pendingPath) return;
        hasNavigatedRef.current = true;
        navigateFn(pendingPath);
        setTransitionPhase('revealing');
    }, [pendingPath]);

    const onTransitionComplete = useCallback(() => {
        setIsTransitioning(false);
        setPendingPath(null);
        setTransitionPhase('idle');
        hasNavigatedRef.current = false;
    }, []);

    const value = {
        isTransitioning,
        pendingPath,
        transitionPhase,
        startTransition,
        onMidpointReached,
        onTransitionComplete,
    };

    return (
        <TransitionContext.Provider value={value}>
            {children}
        </TransitionContext.Provider>
    );
}

export function useTransition() {
    const ctx = useContext(TransitionContext);
    if (!ctx) {
        throw new Error('useTransition must be used within a TransitionProvider');
    }
    return ctx;
}