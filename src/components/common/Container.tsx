import { NextPage } from "next"

const Container = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="container px-10 mx-auto">
            {children}
        </div>
    )
}

export default Container;