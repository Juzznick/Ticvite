const Footer = () => {
    return (
        <div className="w-screen flex flex-col items-center bg-litegreen h-[40vh] justify-center font-bold">
            <h1 className="text-coalblack font-flubber text-4xl tracking-widest">TicVite</h1>
            <ul className="flex w-[30vw] justify-around mt-15 text-textgrey">
                <a href="#home"><li>HOME</li></a>
                <a href="#features"><li>FEATURES</li></a>
                <a href="#blog"><li>BLOG</li></a>
                <a href="#contact"><li>CONTACT</li></a>
            </ul>
        </div>
    );
}
export default Footer;