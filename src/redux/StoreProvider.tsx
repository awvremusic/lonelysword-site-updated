"use client"
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import { useRef } from "react";

type StoreProviderProps = {
    children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}