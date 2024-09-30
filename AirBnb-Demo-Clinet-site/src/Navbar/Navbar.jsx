
import logoImg from '../assets/airbnb_logo.png'
import MenuDropdown from './MenuDropdown'
import Container from '../Container/Container'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <a to="/">
              <img
                className="md:block"
                src={logoImg}
                alt="logo"
                width="100"
                height="90"
              />
            </a>

            <button className="font-semibold" to="/">
              Stays
            </button>
            
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
          <SearchBar></SearchBar>
        </Container>
      </div>
    </div>
  );
}

export default Navbar
