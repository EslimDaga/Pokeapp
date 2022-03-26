import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Toggle from "./ThemeToggle";
import Logo from "../../assets/images/pokeapi.png";

export default function Header() {
  return (
    <Popover className="bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-4">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Logo</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={Logo}
                alt="logo-pokeapi"
              />
            </Link>
          </div>
          <div className="flex -mr-2 -my-2 md:hidden">
            <Toggle />
            <Popover.Button className="bg-gray-200 dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-gray-800">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link
              to="/wath-pokemon-am-i"
              className="font-fredoka font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900"
            >
              ¿Que pokemon soy?
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Toggle />
            <a
              href="/"
              className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-fredoka font-medium text-white bg-blue-800 hover:bg-blue-900"
            >
              @EslimDaga
            </a>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50 dark:divide-gray-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={Logo} alt="logo-pokeapi" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-gray-700">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/"
                  className="font-fredoka font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-50"
                >
                  ¿Que pokemon soy?
                </a>
              </div>
              <a
                href="/"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-fredoka font-medium text-white bg-blue-800 hover:bg-blue-900"
              >
                @EslimDaga
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}