import Image from "next/image"

const Footer = () => {
    return (
        <section className="py-20">
            <Image src="/imgs/logo.png" width={48} height={48} alt="" />
            <div className="pt-3">Copyright © WOBBLEBUG 2022</div>
        </section>
    )
}

export default Footer