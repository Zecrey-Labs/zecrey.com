import {CardIntroStyle} from "./styles";
import Button from "@/components/button";

interface Props {
    ico: string;
    title: string;
    url: string;
    index: number;
    description: string;
}

export default function CardDownload(props: Props) {

    return (
        <CardIntroStyle>
            <img className={`img${props.index}`} src={props.ico}/>
            <div className={'line'}></div>
            <p className={'title'} dangerouslySetInnerHTML={{
                __html: props.title
            }} />
            <p className={'description'}>
                {props.description}
            </p>
            <div className={'btn'}>
                <Button href={props.url} text={`${props.index === 2 ? 'Launch' : 'Download'}`} />
            </div>
        </CardIntroStyle>
    );
};
