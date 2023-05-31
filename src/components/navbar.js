import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#Logo", current: false },
  { name: "Warum Oracode", href: "#16", current: false },
  { name: "Projects", href: "#121", current: false },
  { name: "Impressum", href: "#footer", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  function LanguageChange() {
    console.log("Sprache geändert");
  }
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-6">
            <div className="flex justify-between sm:mt-3 h-16 items-center">
              {/* Hält alles in einer Linie */}
              <div className="flex items-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src="Oracode-Logo-Mobile.png" // Mobile Logo
                    alt="Your Company"
                    id="Logo"
                  />
                  <img
                    className="hidden h-20 w-auto lg:block"
                    src="Oracode-Logo-Desktop.png" // Desktop Logo
                    alt="Your Company"
                    id="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="hidden flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="h-12 w-auto"
                  src="Sprachen-Logo.png" // Current Language Logo
                  alt="Current Language"
                  onClick={LanguageChange}
                />
                {/* Mobile menu button*/}
                <Disclosure.Button className="items-center rounded-md p-2 text-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block sm:h-8 sm:w-8 h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block sm:h-8 sm:w-8 h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block w-full absolute z-50 bg-opacity-50">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-cyan-800 text-white"
                      : "text-gray-700 bg-gray-100 hover:bg-cyan-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
