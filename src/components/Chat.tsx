import React, {ChangeEventHandler} from 'react';

interface InputProps {
  message?: string
}

function Chat(props: InputProps) {
  const {message = 'abc'} = props

  return (
    <div className={'mt-4'}>
      <p className={'font-bold mb-2'}>Kết quả:</p>
      <div className={'w-full rounded-lg border border-gray-300 p-2 bg-slate-50 min-h-[70vh] overflow-auto'}>
        {message}
      </div>
    </div>
  );
}

export default Chat;