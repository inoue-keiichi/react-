import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ColorfulBeads from './components/molecules/ColorfulBeads';
import CounterBoard from './components/molecules/CounterBoard';
import { counterSlice, type CounterState } from './stores/counter';

const App: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { added, decremented, incremented } = counterSlice.actions;

  return (
    <>
      <CounterBoard
        count={count}
        add={(amount: number) => dispatch(added(amount))}
        decrement={() => dispatch(decremented())}
        increment={() => dispatch(incremented())}
      />
      <ColorfulBeads count={count} />
    </>
  );
};

export default App;
