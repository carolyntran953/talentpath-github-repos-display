import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 648px;
  height: 224px;
  border: solid black 1px;
`

const Left = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`

const Right = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  padding: 48px 0;
`
const Repo = styled.div`
  grid-column: 1;
  grid-row: 1;
  border: solid black 1px;
`

const User = styled.div`
  grid-column: 1;
  grid-row: 2;
  border: solid black 1px;
`

const Desc = styled.div`
  grid-column: 1;
  grid-row: 3;
  border: solid black 1px;
`

const Forks = styled.div`
  grid-column: 3;
  grid-row: 1;
  border: solid black 1px;
`

const Stars = styled.div`
  grid-column: 3;
  grid-row: 2;
  border: solid black 1px;
`

const Issues = styled.div`
  grid-column: 3;
  grid-row: 3;
  border: solid black 1px;
`

function Card(props) {
  return (
    <Wrapper>
      <Left>
        <Repo><a href={props.repo.html_url} target="_blank">{props.repo.name}</a></Repo>
        <User>by {props.repo.owner.login}</User>
        <Desc>{props.repo.description}</Desc>
      </Left>
      <Right>
        <Forks><FontAwesomeIcon icon={faCodeBranch} /> {props.repo.forks} forks</Forks>
        <Stars><FontAwesomeIcon icon={faStar} /> {props.repo.stargazers_count} stars</Stars>
        <Issues><FontAwesomeIcon icon={faDotCircle} /> {props.repo.open_issues} open issues</Issues>
      </Right>
    </Wrapper>
  );
}

export default Card;