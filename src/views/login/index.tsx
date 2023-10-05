import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/stores/features/counterSlice';
import { Button } from 'antd';
const index: React.FC = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const addCountEvent = () => {
    dispatch(increment());
  };
  return (
    <div>
      <p>{count}</p>
      <Button onClick={addCountEvent}>+1</Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
    </div>
  );
};

export default index;
