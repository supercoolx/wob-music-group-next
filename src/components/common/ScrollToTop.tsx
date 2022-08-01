const ScrollToTop = () => {
    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <button onClick={scrollToTop} className="fixed w-10 h-10 transition-colors duration-300 border-2 border-green-600 rounded-full shadow-xl shadow-black bottom-10 right-10 hover:bg-green-600 animate-bounce" />
    )
}

export default ScrollToTop;