
export default function Navbar() {

    const links = [
    { name: "Home", to: "/" },
    { name: "Career", to: "" },
    { name: "Projects", to: "" },
    ];
    
    const mediaLink = [
    { name: "Github", to: "/" },
    { name: "Linkedin", to: "" },
    ]

  return (
    <div className="border-b border-gray-300 rounded-2xl w-fit shadow-lg bg-white">
        <nav className="">
            <ul className="flex py-2 px-2">
                {links.map((link, i) => (
                <li key={i} className="px-2">
                    <a href={link.to} className=''>
                    {link.name}
                    </a>
                </li>
                ))}

                <div></div>

                {mediaLink.map((link, i) => (
                    <li key={`media-${i}`} className="px-2">
                        <a href={link.to}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  );
}
