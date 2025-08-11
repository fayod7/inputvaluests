import { memo } from 'react';

const Header = () => {
  return (
    <header className="w-full bg-[#e7e5eb] sticky top-0 left-0">
      <nav className="container h-[70px] flex items-center justify-between">
        <h2 className='text-[30px] text-slate-800'>Header </h2>
      </nav>
    </header>
  );
};

export default memo(Header);