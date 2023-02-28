import {ButtonStyle} from "./styles";
import {useMemo} from "react";
import EleA from "@/components/elea";

interface Props {
    text: string;
    href?: string;
}

export default function Button(props: Props) {

    return (
        <ButtonStyle>
            <EleA
                href={props.href}
            >
                {props.text}
            </EleA>
        </ButtonStyle>
    );
};
