import {initI18n} from "transle";
import type {ReactNode} from "react";

import vi from "../../locales/vi.json"
import en from "../../locales/en.json"
import fr from "../../locales/fr.json"

initI18n({vi, en, fr})

const Provider = ({children}: { children: ReactNode }) => {
    return children
};

export default Provider;