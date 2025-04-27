'use server';
import { getLoggedInUser } from "@/lib/actions/user.action";

const AuthLayout = async ({children} : {children : React.ReactNode}) => {
    const user = await getLoggedInUser();
    console.log(user)
    return <main>{children}</main>
}

export default AuthLayout;