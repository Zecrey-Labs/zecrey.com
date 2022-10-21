import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { CenterFlex, MainTitle } from "styles/globals";
import {
  BackgoundIcon,
  CardLayoutMobile,
  CardLayoutWrap,
  Content,
  IconWrap,
  Text,
  Title,
} from "./styles";

const CardLayout = (props: {
  title: ReactNode;
  backgroundIcon: {
    svg: ReactNode; // svg element
    size: { width: string; height: string };
  };
  text: string[];
  children?: ReactNode; // sub component
}) => {
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
};

export default CardLayout;

const Desktop = (props: {
  title: ReactNode;
  backgroundIcon: {
    svg: ReactNode; // svg element
    size: { width: string; height: string };
  };
  text: string[];
  children?: ReactNode; // sub component
}) => {
  return (
    <CardLayoutWrap>
      <IconWrap>
        <BackgoundIcon className="move06to0" size={props.backgroundIcon.size}>
          {props.backgroundIcon.svg}
        </BackgoundIcon>
      </IconWrap>
      <CenterFlex className="card-content">
        <div className="left">
          <MainTitle className="move13to0">{props.title}</MainTitle>
        </div>
        <div className="right">
          <Text className="move13to0">
            {props.text.map((i, index) => (
              <p key={index}>{i}</p>
            ))}
          </Text>
          <Content className="move13to0">{props.children}</Content>
        </div>
      </CenterFlex>
    </CardLayoutWrap>
  );
};

const Mobile = (props: {
  title: ReactNode;
  backgroundIcon: {
    svg: ReactNode; // svg element
    size: { width: string; height: string };
  };
  text: string[];
  children?: ReactNode;
}) => {
  return (
    <CardLayoutMobile className="content-box-mobile">
      <BackgoundIcon size={props.backgroundIcon.size}>
        {props.backgroundIcon.svg}
      </BackgoundIcon>
      <Title className="title">{props.title}</Title>
      <div className="content-box-body">{props.children}</div>
      <Text>
        {props.text.map((i, index) => (
          <p key={index}>{i}</p>
        ))}
      </Text>
    </CardLayoutMobile>
  );
};
