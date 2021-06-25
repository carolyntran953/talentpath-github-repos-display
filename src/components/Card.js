import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle, faStar } from '@fortawesome/free-regular-svg-icons';

const Wrapper = styled.div`
  width: 648px;
  height: 224px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 16px;
  margin-top: 40px;
  background-color: #fff
`

const Left = styled.table`
  padding-top: 40px;
  padding-left: 27px;
  display: inline-block;
  width: 392px;
  height: 224px;
`

const Right = styled.table`
  display: inline-block;
  height: 224px;
  padding-top: 20px;
  border-spacing: 0 27px;
`

const Repo = styled.div`
  font-color: #081F32;
  font-family: 'DM Serif Display', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 25px;
`

const User = styled.div`
  color: #A5ADBB;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;

`

const Desc = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #6E798C;
`

const Icon = styled.td`

`
const Num = styled.td`
  text-align: right;
  font-weight: 600;
  font-size: 16px;
  color: #081F32;
`
const Text = styled.td`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #6E798C;
  padding-left: 3px;
`

function Card(props) {
  return (
    <Wrapper>
      <Left>
        <tr>
          <Repo><a href={props.repo.html_url} target="_blank" style={{textDecoration: 'none', color: "#081F32"}}>{props.repo.name}</a></Repo>
        </tr>
        <tr>
          <User>by {props.repo.owner.login}</User>
        </tr>
        <tr>
          <Desc>{props.repo.description}</Desc>
        </tr>
      </Left>
      <Right>
          <tr>
            <Icon><FontAwesomeIcon icon={faCodeBranch} /></Icon>
            <Num>{props.repo.forks}</Num>
            {props.repo.forks === 1 
              ? <Text>fork</Text>
              : <Text>forks</Text>
            }
          </tr>
          <tr>
            <Icon><FontAwesomeIcon icon={faStar} /></Icon>
            <Num>{props.repo.stargazers_count}</Num> 
            {props.repo.stargazers_count === 1 
              ? <Text>star</Text>
              : <Text>stars</Text>
            }
          </tr>
          <tr>
            <Icon><FontAwesomeIcon icon={faDotCircle} /></Icon>
            <Num>{props.repo.open_issues}</Num> 
            {props.repo.open_issues === 1 
              ? <Text>open issue</Text>
              : <Text>open issues</Text>
            }
          </tr>
      </Right>
    </Wrapper>
  );
}

export default Card;