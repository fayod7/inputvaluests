import { memo, useState } from 'react';

const Header = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <header className="w-full bg-[#e7e5eb] sticky top-0 left-0">
      <nav className="container h-[70px] flex items-center justify-between">
        <h2 className='text-[30px] text-slate-800'>Header {count}</h2>
        <button onClick={() => setCount(prev => prev + 1)}>add</button>
      </nav>
    </header>
  );
};

export default memo(Header);