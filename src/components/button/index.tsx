import {ButtonStyle} from "./styles";
import {useMemo} from "react";

interface Props {
    text: string;
    href?: string;
}

export default function Button(props: Props) {
    const imHasUrl = useMemo(() => {
        return props.href === "" || !props.href
    }, [
        props.href
    ])

    return (
        <ButtonStyle>
            <a
                onClick={ (e) => { imHasUrl && e.preventDefault() } }
                href={imHasUrl ? "#" : props.href}
                target={imHasUrl ? "_self" : "_blank"}
            >
                {props.text}
            </a>
        </ButtonStyle>
    );
};
