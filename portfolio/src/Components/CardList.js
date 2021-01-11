// Data
import cardElements from "../Data/cardElements";

// Style
import styled from "styled-components";

// Components
import Card from "./Card";

const CardList = () => {
  return (
    <List>
      {cardElements.map((element) => {
        return (
          <Card
            imageUrl={element.imageUrl}
            title={element.title}
            desc={element.desc}
            tags={element.tags}
            link={element.link}
          />
        );
      })}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default CardList;
