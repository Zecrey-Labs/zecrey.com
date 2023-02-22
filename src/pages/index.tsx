import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("@/components/layout"), {
    ssr: false,
});
const Screens = dynamic(() => import("@/components/screen/index"), {
    ssr: false,
});
const Backers = dynamic(() => import("@/components/backers"), {
    ssr: false,
});
const Roadmap = dynamic(() => import("@/components/roadmap"), {
    ssr: false,
});
const Contact = dynamic(() => import("@/components/contact"), {
    ssr: false,
});

export default function Home() {
    return (
        <RootLayout>
            <Screens />
            <Backers />
            <Roadmap />
            <Contact />
        </RootLayout>
    )
}
