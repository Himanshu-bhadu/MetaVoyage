import Link from "next/link";
import LoginDialog from "./Login";

export default function Nav() {
    return (
        <div>
            <ul>
                <LoginDialog />
                <li className="flex flex-col">
                    <Link href='/movie' >Movie / Theatre Logo</Link>
                </li>
                <li>
                    <Link href='/train' >Train Logo</Link>
                </li>
                <li>
                    <Link href='/music' >Music Logo</Link>
                </li>
                <li>
                    <Link href='/hotel' >Hotel Logo</Link>
                </li>
                <li>
                    <Link href='/flight' >Flight Logo</Link>
                </li>
            </ul>
        </div>
    )
}