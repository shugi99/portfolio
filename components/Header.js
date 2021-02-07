import Link from 'next/link';

const Header = () => {
  return (
    <nav className='space-x-10'>
      <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
        <li>
          <a
            href='#projects'
            className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg  text-sm background'
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg  text-sm background'
          >
            Contact
          </a>
        </li>
        <li>
          <Link href='/Shugi-Yen-Lazala-Resume.pdf'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg text-sm background'
            >
              Resume
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
