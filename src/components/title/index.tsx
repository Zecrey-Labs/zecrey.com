import {SecTitleStyle} from "./styles";

interface Props {
    title: string;
    description: string;
}

export default function SecTitle(props: Props) {

    return (
        <SecTitleStyle>
            <p className={'p1'}>{props.title}</p>
            <p className={'p2'}>{props.description}</p>
        </SecTitleStyle>
    );
};
