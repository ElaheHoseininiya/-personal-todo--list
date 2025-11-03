import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className="Shadow-md bg-white">
                <div className="container mx-auto py-2">

                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Image
                                src="/src/pic/pic.png"
                                alt="logo"
                                width={32}
                                height={32} c321sqaNYJY
                                priority
                            />
                            <h1 className="text-lg font-semibold mr-4">
                                وظایف من
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src="/src/pic/لوگو.png"
                                alt="logo"
                                width={32}
                                height={32} c321sqaNYJY
                                priority
                            />
                            <span className="mr-2">خوش آمدید </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}