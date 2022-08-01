import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <button onClick={scrollToTop} className="fixed flex items-center justify-center w-16 h-16 text-green-600 transition-colors duration-300 border-2 border-green-600 rounded-full shadow-xl hover:text-white shadow-black bottom-10 right-10 hover:bg-green-600 bg-stone-800 animate-bounce">
            <AiOutlineArrowUp size={30} />
        </button>
    )
}

export default ScrollToTop;