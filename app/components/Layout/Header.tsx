/* eslint-disable prettier/prettier */
import { CartBag } from '@app/components/CartBag/CartBag';
import { NavBar } from './NavBar/NavBar';
import { Login } from '@app/components/Login/Login';
import testIds from '@app/utils/test-ids';
import Link from 'next/link';

const Header = () => (
  <>
    <header
      className="h-header z-40 w-full"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8">
        <h2 className="flex-1">
          <a href="/">SWE#A P!RM!R</a>
        </h2>
        <h3>
          <main>
            <Link href="/users">Users</Link>
          </main>
        </h3>
        <div>
          <Login />
        </div>

        <div>
          <CartBag />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
