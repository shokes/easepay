import React from 'react';

const navItems = [
  {
    id: 1,
    item: 'Uses Cases',
    href: '/',
  },
  {
    id: 2,
    item: 'Products',
    href: '/',
  },
  {
    id: 3,
    item: 'Company',
    href: '/',
  },
  {
    id: 4,
    item: 'Support',
    href: '/',
  },
];

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center py-[33px]'>
      <div>winden</div>
      <div className='flex gap-[63.33px] items-center'>
        {navItems.map((nav) => {
          const { id, item, href } = nav;
          return <div key={id}>{item}</div>;
        })}
      </div>

      <div className='flex gap-[31.6px]'>
        <div>login</div>
        <div>signup</div>
      </div>
    </nav>
  );
};

export default Navigation;
