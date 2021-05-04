export default function Menu() {
    return <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
            <ul class="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0 font-medium">
                <li>
                    <Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400" to="/link1">
                        <h1 class="font-sans font-bold text-xl">link1</h1>
                    </Link>
                </li>
                <li>
                    <Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400" to="/link1">
                        <h1 class="font-sans font-bold text-xl">link1</h1>
                    </Link>
                </li>
                <li>
                    <Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400" to="/link1">
                        <h1 class="font-sans font-bold text-xl">link1</h1>
                    </Link>
                </li>
            </ul>
        </nav>


    </div>;
}