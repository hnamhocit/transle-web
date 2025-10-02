import {useT} from "transle";

const Footer = () => {
    const t = useT()

    return (
        <div className="text-center mt-12 text-lg max-w-2xl text-neutral-700 mx-auto leading-relaxed">
            {t("footer.intro")}
        </div>
    );
};

export default Footer;