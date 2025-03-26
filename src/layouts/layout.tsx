import { Github } from 'lucide-react'
import type {  PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

function Layout({children} : PropsWithChildren) {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
      <Header />
      <main className='min-h-screen'>{children}</main>
      <footer className='border-t backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container py-6 mx-auto text-center text-gray-500'>
          <p className='flex justify-center items-center py-2 text-lg'>
            Made by <Link to='https://github.com/at-imene' target='blank' className='flex items-center px-2'><Github className='mr-2' size={16}/> imene-at</Link> with 💗</p>
        </div>
      </footer>
      </div>
  )
}

export default Layout