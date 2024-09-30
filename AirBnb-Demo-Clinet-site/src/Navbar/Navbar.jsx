
import logoImg from '../assets/airbnb_logo.png'
import MenuDropdown from './MenuDropdown'
import Container from '../Container/Container'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <a to='/'>
              <img
                className='md:block'
                src={logoImg}
                alt='logo'
                width='180'
                height='180'
              />
            </a>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
