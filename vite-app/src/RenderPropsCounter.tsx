import { Component, type FC } from 'react';

interface ChildProps {
  count: number;
  reset: () => void;
  increment: () => void;
}

interface Props {
  maxCount: number;
  children: (props: ChildProps) => JSX.Element;
}
interface State {
  count: number;
}

class CounterProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  #increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  #reset = () => {
    this.setState({ count: 0 });
  };

  componentDidUpdate(): void {
    if (this.state.count > this.props.maxCount) this.#reset();
  }

  render = (): JSX.Element =>
    this.props.children({
      count: this.state.count,
      reset: this.#reset,
      increment: this.#increment,
    });
}

const Counter: FC<{ maxCount: number }> = ({ maxCount }) => (
  <CounterProvider maxCount={maxCount}>
    {({ count, reset, increment }) => (
      <div>
        <div>
          {count} / {maxCount}
        </div>
        <button onClick={increment} type="button">
          +1
        </button>
        <button onClick={reset} type="button">
          Reset
        </button>
      </div>
    )}
  </CounterProvider>
);

export default Counter;
// SEE: https://stackblitz.com/edit/react-ts-ztznn3?file=Counter.tsx”
