import {ButtonStyle} from "./styles";

interface Props {
    text: string;
    href?: string;
}

export default function Button(props: Props) {
    return (
        <ButtonStyle>
             <a target={props.href ? "_blank" : "_self"} href={props.href || "javascript:void(0);"}>
                {props.text}
            </a>
        </ButtonStyle>
    );
};
