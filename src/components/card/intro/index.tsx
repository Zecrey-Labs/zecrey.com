import {CardIntroStyle} from "./styles";

interface Props {
    ico: string;
    icoDark: string;
    title: string;
    description: string;
}

export default function CardIntro(props: Props) {

    return (
        <CardIntroStyle>
            <img className={'light'} src={props.ico}/>
            <img className={'dark'} src={props.icoDark}/>
            <p className={'title'} dangerouslySetInnerHTML={{
                __html: props.title
            }} />
            <div className={'line'}></div>
            <p className={'description'}>
                {props.description}
            </p>
        </CardIntroStyle>
    );
};
