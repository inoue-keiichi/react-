// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Component, type FC } from 'react';

interface InjectedProps {
  count: number;
  reset: () => void;
  increment: () => void;
}
interface Props {
  maxCount: number;
}
interface State {
  count: number;
}

const withCounter = (WrappedComponent: FC<Props & Partial<InjectedProps>>) =>
  class Counter extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { count: 0 };
    }

    #increment = (): void => {
      this.setState((state) => ({ count: state.count + 1 }));
    };

    #reset = (): void => {
      this.setState({ count: 0 });
    };

    componentDidUpdate(): void {
      if (this.state.count > this.props.maxCount) this.#reset();
    }

    render = (): JSX.Element => (
      <WrappedComponent
        maxCount={this.props.maxCount}
        count={this.state.count}
        reset={this.#reset}
        increment={this.#increment}
      />
    );
  };

const CounterBox: FC<Props & Partial<InjectedProps>> = ({
  maxCount,
  count = 0,
  reset = () => undefined,
  increment = () => undefined,
}) => (
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
);

export default withCounter(CounterBox);
// SEE: https://stackblitz.com/edit/react-ts-bjhtfc?file=Counter.tsx”
