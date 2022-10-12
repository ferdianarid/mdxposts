import { Fragment } from "react"
import Link from "next/link"

const PageLayouts = ({ children }: any) => {
    return (
        <Fragment>
            <div className="w-full mx-auto bg-neutral-10 rounded-2xl z-50 sticky top-3 py-6 flex items-center justify-between px-4 md:px-8">
                <div className=" flex items-center space-x-6 md:space-x-12">
                    <Link href="/">
                        <h1 className="font-gilroy-bold hover:cursor-pointer text-2xl text-neutral-100">PostsList&trade;</h1>
                    </Link>
                    <Link href="/posts">
                        <h3 className="font-gilroy-medium hover:cursor-pointer text-md text-neutral-100">Posts</h3>
                    </Link>
                </div>
                <input type="text" className="py-2 w-[200px] md:w-[300px] px-4 text-md font-gilroy-medium bg-neutral-20 rounded-lg focus:border focus:border-primary-hover focus:outline-primary-hover" placeholder="Search Post" />
            </div>
            {children}
        </Fragment>
    )
}

export default PageLayouts