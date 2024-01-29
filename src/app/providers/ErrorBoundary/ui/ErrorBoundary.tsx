import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {}

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const { hasError, children } = this.state;

        if (hasError) {
            return <h1>Что то пошло не так...</h1>;
        }

        return children;
    }
}

export default ErrorBoundary;
