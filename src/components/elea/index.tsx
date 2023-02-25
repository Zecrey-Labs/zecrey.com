import {EleAStyle} from "./styles";
import {useMemo, ReactNode} from "react";

interface Props {
    children: ReactNode;
    href?: string;
}

export default function EleA(props: Props) {
    const imHasUrl = useMemo(() => {
        return props.href === "" || !props.href
    }, [
        props.href
    ])

    return (
        <EleAStyle
            onClick={(e) => {
                imHasUrl && e.preventDefault()
            }}
            href={imHasUrl ? "#" : props.href}
            target={imHasUrl ? "_self" : "_blank"}
            style={{
                cursor: imHasUrl ? "not-allowed" : "pointer"
            }}>
            {props.children}
        </EleAStyle>
    );
};
