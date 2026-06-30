import { useCallback } from 'react';
import { useTransition } from './TransitionContext';

export function useTransitionNavigate() {
    const { startTransition } = useTransition();

    const transitionTo = useCallback((path) => {
        startTransition(path);
    }, [startTransition]);

    return transitionTo;
}