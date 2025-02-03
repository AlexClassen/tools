import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'

const solutions = [
    {
        name: 'Tools',
        description: "Calculator, Simulators, and other tools to help you with your projects",
        href: '/tools',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Code Snippets',
        description: 'Copy and Paste code snippets to speed up your development',
        href: '/code-snippets',
        icon: CursorArrowRaysIcon,
    },
]

export default function Example() {
    return (
        <Popover className="relative isolate z-50 shadow-sm">
            <div className="bg-white py-5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                        Solutions
                        <ChevronDownIcon aria-hidden="true" className="size-5" />
                    </PopoverButton>
                </div>
            </div>

            <PopoverPanel
                transition
                className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 ring-1 shadow-lg ring-gray-900/5 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
                    {solutions.map((item) => (
                        <div
                            key={item.name}
                            className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm/6 hover:bg-gray-50 sm:flex-col sm:p-6"
                        >
                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            </div>
                            <div>
                                <a href={item.href} className="font-semibold text-gray-900">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    )
}
