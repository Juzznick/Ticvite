const Footer = () => {
    return (
        <div className="w-screen flex flex-col items-center bg-litegreen h-[40vh] justify-center font-bold">
            <h1 className="text-textgrey font-inter text-2xl">TicVite</h1>
            <ul className="flex w-[30vw] justify-around mt-15 text-textgrey">
                <li>HOME</li>
                <li>FEATURES</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}
export default Footer;