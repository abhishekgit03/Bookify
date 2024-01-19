import React from 'react'

function Navbar() {
  return (
    <nav class="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-regal-blue bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    <div class="flex items-center justify-between text-blue-gray-900">
      <a href="#"
        class="mr-4 block cursor-pointer py-1.5 font-sans font-extrabold text-2xl text-regal-blue leading-relaxed text-inherit antialiased">
        Bookify
      </a>
      <div class="flex items-center gap-4">
        <div class="hidden mr-4 lg:block">
          <ul class="flex flex-col gap-2 mt-2 mb-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              <a href="/" class="flex items-center font-semibold">
                Home
              </a>
            </li>
            <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              <a href="/book/list" class="flex items-center font-semibold">
                Add Listing
              </a>
            </li>
            <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              <a href="/book/orders" class="flex items-center font-semibold">
                Orders
              </a>
            </li>
            
          </ul>
        </div>
        <div class="flex items-center gap-x-1">
          <a
            href="/register"
            class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Log In</span>
          </a>
          <a
            href="/register"
            class="hidden select-none rounded-lg bg-gradient-to-tr from-electric-blue to-regal-blue py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Sign up</span>
          </a>
        </div>
        <button
          class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button">
          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar