import Card from './Card';

function RepoList(props) {
  return (
    <div>
      {props.repos.map(repo => <Card key={repo.id} repo={repo} />)}
    </div>
  );
}

export default RepoList;