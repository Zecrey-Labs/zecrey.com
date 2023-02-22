import RootLayout from "@/components/layout";
import Screens from "@/components/screen/index";
import Backers from "@/components/backers";
import Roadmap from "@/components/roadmap";
import Contact from "@/components/contact";

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
