import ListCard from "./ListCard";

function CateList({ list }) {
  return (
    <section className="cateList mw">
      <div className="listCon">
        {list.map((item, i) => (
          <ListCard key={i} item={item}></ListCard>
        ))}
      </div>
    </section>
  );
}

export default CateList;
