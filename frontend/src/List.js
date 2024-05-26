const ListModule = (props) => {
  return props.list.map((item) => (
    <div key={item.objectID} className="container">
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));
};
export default ListModule;
