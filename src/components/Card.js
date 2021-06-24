function Card(props) {
  return (
    <div>
      <a href={props.repo.html_url} target="_blank">{props.repo.name}</a>
    </div>
  );
}

export default Card;