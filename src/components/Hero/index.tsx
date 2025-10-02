import {useT} from "transle";
import {CopyIcon} from "lucide-react";
import {Button} from "antd";

const Hero = () => {
    const t = useT()

    return (
        <div className="text-center flex flex-col items-center gap-4 my-12">
            <div className="text-4xl sm:text-5xl font-bold">TRANSLE</div>

            <div className="font-semibold text-xl sm:text-2xl">
                {t("hero.slogan")}
            </div>

            <div className="flex items-center w-fit gap-3 py-2 px-3 rounded-xl bg-neutral-900 text-white">
                <div className="google-sans-code">
                    npm i transle
                </div>

                <Button color="primary" shape="circle" icon={
                    <CopyIcon size={18}/>
                }
                        onClick={() => {
                            navigator.clipboard.writeText("npm i transle")
                        }}
                />
            </div>
        </div>
    );
};

export default Hero;
