import React from 'react';
import {useI18nStore, useT} from "transle";

import vi from '../../locales/vi.json'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

import CodeBlock from "../CodeBlock";

const Steps = () => {
    const {translations, flattenTranslations} = useI18nStore()
    const t = useT()

    return (
        <div className="space-y-12 container mx-auto px-4">
            <div className="space-y-3">
                <div className="text-xl sm:text-2xl font-bold">
                    1. {t("guide.create")}
                </div>

                <div className="google-sans-code flex items-center gap-3">
                    <div className="bg-white p-2 rounded-md">
                        en.json
                    </div>
                    <div className="bg-white p-2 rounded-md">vi.json</div>
                    <div className="bg-white p-2 rounded-md">fr.json</div>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                    <CodeBlock value={en}/>
                    <CodeBlock value={vi}/>
                    <CodeBlock value={fr}/>
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-xl sm:text-2xl font-semibold">
                    2. {t("guide.step2")}
                </div>

                <img src="/demo.png" alt="Demo code"/>

                <div>As you can see, this is flatten translations progress to make it easier to use</div>

                <div className="flex gap-3 flex-wrap">
                    <CodeBlock value={translations}/>

                    <CodeBlock value={flattenTranslations}/>
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-xl sm:text-2xl font-semibold">3. {t("guide.enjoy")} 😍</div>

                <div className="google-sans-code">{'import {useT, useI18nStore} from "transle"'}</div>

                <div className="flex flex-col gap-3 google-sans-code">
                    <div className="font-medium underline">useI18nStore</div>

                    <div className="flex flex-col gap-1 pl-6">
                        <div>lang: string</div>
                        <div>setLang: (lang: string) ={'>'} void</div>
                        <div>getLangs: () ={'>'} string[]</div>
                        <div>translations</div>
                        <div>flattenTranslations</div>
                    </div>

                    <div className="font-medium underline">useT</div>

                    <div className="flex flex-col gap-1 pl-6">
                        <div>
                            const t = useT()
                        </div>

                        <div>{'<div>'}{'{'}t("header.welcome"){'}'}{'</div>'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;