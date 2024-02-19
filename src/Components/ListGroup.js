
function ListGroup() {
  let items = ["New York", "Vijayawada", "Hyderabad"];
  const selectedIndex=-1;
  // items=[];
  return (
    <div>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No item Found</p> : null} {/* rendering dynamically using tenary operator*/}
      {items.length === 0 && <p>No item Found</p>}  {/* rendering dynamically using logical and operator*/}
     
      <ul className="list-group">
      {items.map((item,index) => (
            <li className="list-group-item active" key={item} onClick={()=>console.log(item,index)}>{item}</li>
      ))}
</ul>
{/* <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
      </ul> */}
    </div>
  );
}
export default ListGroup;
