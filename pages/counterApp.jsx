import create from "zustand";

const useStore = create((update) => ({
    counter: 0,
    increment: () => {
        set((state) => ({}));
    },
}));

function MyApp({ Component, pageProps }) {
    const counter = useStore((state) => state.counter);

    return {...pageProps} {
        <Component>
            <div>{counter}</div>;
        </Component>

    }

    // return <Component {...pageProps} />;
}

export default MyApp;