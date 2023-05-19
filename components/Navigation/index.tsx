import React from 'react';
import logo from '../../public/assets/images/svg.png';
import Image from 'next/image';
import Link from 'next/link';
import { Navbg } from './index.styles';
import Button from '../Button';
import Container from '../Container';
import Typography from '../Typography';
import { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { Dialog } from '@headlessui/react';
import { MdClose } from 'react-icons/md';
import winden from '../../public/assets/images/winden.png';
import {
  InnerContainer,
  LoginAndSignupStyles,
  NavItemsStyles,
  MenuButtonStyles,
  dialogPanelClasses,
} from './index.styles';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Navbg>
      <Container>
        <InnerContainer className='text-white'>
          <div className='flex items-center'>
            <Image src={logo} width={30} height={30} alt='logo' />
            <Image src={winden} width={100} height={40} alt='logo' />
          </div>
          <NavItemsStyles className='hidden lg:flex'>
            {navItems.map((nav) => {
              const { id, item } = nav;
              return (
                <Typography key={id} as='p'>
                  <Link href='/'>{item}</Link>
                </Typography>
              );
            })}
          </NavItemsStyles>

          <LoginAndSignupStyles className='hidden lg:flex'>
            <Link href='/'>Log In</Link>
            <Button link='/' bg='bg-white/[.05]'>
              <Typography as='p' font='font-normal'>
                Sign Up
              </Typography>
            </Button>
          </LoginAndSignupStyles>

          {/* beginning mobile nav */}

          <div className='flex lg:hidden'>
            <MenuButtonStyles
              type='button'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <RiMenu3Fill className='text-white h-9 w-9' aria-hidden='true' />
            </MenuButtonStyles>
          </div>

          <Dialog
            as='div'
            className='lg:hidden'
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className='fixed inset-0 z-10' />
            <Dialog.Panel className={dialogPanelClasses}>
              <div className='flex items-center justify-between'>
                <MenuButtonStyles
                  type='button'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <MdClose className='h-9 w-9' aria-hidden='true' />
                </MenuButtonStyles>
              </div>
              <div className='mt-6 flow-root'>
                <div>
                  <div className='space-y-2 py-6 text-white'>
                    {navItems.map((nav) => {
                      return (
                        <Typography key={nav.id} as='h3'>
                          <Link href='/'>{nav.item}</Link>
                        </Typography>
                      );
                    })}
                  </div>

                  <div className='text-white'>
                    <div className='py-6'>
                      <Typography as='h3' font='font-regular'>
                        <Link href='/'>Log In</Link>
                      </Typography>
                    </div>

                    <Button link='/' bg='bg-white/[.05]' width={true}>
                      <Typography as='h3' font='font-normal'>
                        Sign Up
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
          {/* end mobile nav */}
        </InnerContainer>
      </Container>
    </Navbg>
  );
};

export default Navigation;
