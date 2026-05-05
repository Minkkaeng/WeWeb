import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-black text-deep-black mb-4">문제가 발생했습니다</h1>
          <p className="text-gray-500 mb-8">페이지를 새로고침 해주세요.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blood-coral text-white font-semibold rounded-xl hover:-translate-y-1 transition-all"
          >
            새로고침
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
