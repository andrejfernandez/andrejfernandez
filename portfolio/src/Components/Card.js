// Style
import styled from "styled-components";

const Card = ({ imageUrl, title, desc, tags, link }) => {
  return (
    <StyledCard href={link} target="_blank">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="line"></div>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="body">
        <div className="card-body">
          <p>{desc}</p>
        </div>
        <div className="card-tags">
          <h4># {tags}</h4>
        </div>
      </div>

      <div className="card-button">
        <button>
          <a href={link} target="_blank" rel="noreferrer">
            <h3>View Code</h3>
          </a>
        </button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  height: 34rem;
  width: 22rem;
  overflow: hidden;
  background: white;
  color: black;
  margin: 2rem 2rem 2rem 2rem;
  text-align: center;
  position: relative;
  border-radius: 1em;

  .image-container {
    background: transparent;
    img {
      object-fit: cover;
      height: 101%;
      width: 101%;
      border: none;
    }
  }

  .line {
    height: 0.7rem;
    margin-top: -0.4rem;
    width: 100%;
    background: #fcfd01;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 1.5rem 0 1.5rem 0;
  }

  .card-title h2 {
    padding-top: 2rem;
    font-size: 2rem;
  }

  .card-body p {
    padding: 0 1rem 1rem 1rem;
  }

  .card-tags h4 {
    line-height: 1.5rem;
    padding: 0 1rem 0 1rem;
  }

  .card-button {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      position: absolute;
      padding: 0.5rem;
      bottom: 2rem;
      align-content: center;
      border: none;

      background: white;
      border: none;
      cursor: pointer;
      border: 0.2em solid #161616;
      border-radius: 2em;
      padding: 1rem;
      transition: all 0.3s ease;
      &:hover {
        background: #161616;
        a {
          color: #fcfd01;
        }
      }
    }
    a {
      color: black;
      text-decoration: none;
    }
  }

  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.02);
  }
`;

export default Card;
