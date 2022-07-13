const Footer = () => {
    return <footer className="footer p-10 bg-primary text-white">
        <div className="grid place-items-end h-full">
            <div>
                <h1 className="text-3xl font-black">Spotify Clone</h1>
                <p className="text-right w-full text-sm sm:pr-2">For Artists</p>
            </div>
        </div>
        <div>
            <span className="footer-title text-info opacity-100">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </div>
        <div>
            <span className="footer-title text-info opacity-100">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </div>
        <div>
            <span className="footer-title text-info opacity-100">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </div>
    </footer>;
};
export default Footer;