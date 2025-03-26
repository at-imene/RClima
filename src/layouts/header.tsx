import { Input } from '@/components/ui/input';
import { useTheme } from '@/context/theme-provider'
import { Moon, Search, Sun } from 'lucide-react';
import { Link } from 'react-router-dom'

function Header() {
  const {isDark, setTheme} = useTheme();

  return (
    <header className='w-full sticky top-0 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 '>
      <div className='container mx-auto flex items-center justify-between h-22  px-4' >
        <Link to={"/"}>
          <img src={isDark? '/logo_light.png': '/logo_dark.png'} alt="logo" className='h-22' />
        </Link>
        <div>
          <div className='flex items-center gap-4'>
          <div className="relative w-85 ">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-10"
            />
        </div>
          <div onClick={()=>setTheme(isDark? 'light': 'dark')} className={`cursor-pointer transition-transform duration-500 ${isDark? 'rotate-180': 'rotate-0'}`} >
          {isDark ? <Sun  className='h-20 text-yellow-400'/> : <Moon className='text-blue-500'/> }
        </div>
          </div>

      </div>
      </div>
      
    </header>
  )
}

export default Header