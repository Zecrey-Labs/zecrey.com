import {CardIntroStyle} from "./styles";

interface Props {
    img: string;
    title: string;
    url: string;
    time: string;
}

export default function CardNews(props: Props) {

    return (
        <CardIntroStyle>
            <a
                style={{
                    cursor: props.url !== "" ? "pointer" : "not-allowed"
                }}
                target={props.url ? "_blank" : "_self"} href={props.url || "javascript:void(0);"}>
                <img src={props.img}/>
                <div className={'line'}></div>
                <p className={'title elips'} dangerouslySetInnerHTML={{
                    __html: props.title
                }} />
                <p className={'time'}>
                    {props.time}
                </p>
            </a>
        </CardIntroStyle>
    );
};
