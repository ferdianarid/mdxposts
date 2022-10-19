import { Fragment } from "react"
import Link from "next/link"

const Navbar = () => {
    return (
        <Fragment>
            <div className="w-full mx-auto bg-neutral-10 rounded-2xl z-50 sticky top-3 py-6 flex items-center justify-between px-4 md:px-8">
                <div className=" flex items-center space-x-6 md:space-x-12">
                    <Link href="/">
                        <h1 className="font-gilroy-bold hover:cursor-pointer text-2xl text-neutral-100">MDXPosts&trade;</h1>
                    </Link>
                    <Link href="/posts">
                        <h3 className="font-gilroy-medium hover:cursor-pointer text-md text-neutral-100">Posts</h3>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar