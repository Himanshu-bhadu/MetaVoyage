import React from 'react';
import LoginDialog from '../app/_components/Login';
import { useSession } from 'next-auth/react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div>
      <header className=" text-white py-4 h-20 backdrop-blur-3xl bg-transparent">
        <nav className="flex justify-between items-center px-10">
          <div className="title-wrapper flex items-center gap-4">
            <div className={`text-2xl ${pacifico.className} text-yellow-300`}>METAVOYAGE</div>
          </div>
          {session ? (
            <ul className="flex gap-5 text-2xl">
              <li>
                <a href="#travel" className="hover:underline">
                  Travel
                </a>
              </li>
              <li>
                <a href="#movies" className="hover:underline">
                  Movies
                </a>
              </li>
              <li>
                <a href="#shows" className="hover:underline">
                  Shows
                </a>
              </li>
              <li>
                <a href="#sell" className="hover:underline">
                  Sell
                </a>
              </li>
            </ul>
          ) : null}
          <LoginDialog />
        </nav>
      </header>
    </div>
  );
};

export default Nav;
