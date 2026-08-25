import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  readonly children: ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
}

/**
 * Impede que um erro de renderização derrube o site inteiro.
 * Mostra uma tela de recuperação e registra o erro no console.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[portfolio] falha ao renderizar', {
      message: error.message,
      stack: error.stack,
      componentStack: info.componentStack,
    });
  }

  private readonly handleReload = (): void => {
    window.location.reload();
  };

  public override render(): ReactNode {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="text-eyebrow font-medium text-ink-faint uppercase">Erro</p>
          <h1 className="mt-4 font-display text-display">Esta página não carregou</h1>
          <p className="mt-4 text-ink-soft">
            Recarregue para tentar de novo. Se o erro continuar, abra o console do navegador
            (F12) — a mensagem completa está lá.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
          >
            Recarregar página
          </button>
        </div>
      </div>
    );
  }
}
