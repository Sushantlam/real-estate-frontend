
import "./List.scss";
import { listData } from "../../Dummydata/dummyData";
import Filter from "../../Component/Filter/Filter"
import Card from "../../Component/Card/Card"

import List from "../../Component/List/List";

import Naksa from "../../Component/Map/Map";
import Hot from "../../Component/Hotproperty/Hot";

function ListPage() {
  const data = listData

  return <div style={{height: "100%"}}> <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Naksa />
    </div>
   
  </div>
  <Hot/>
  </div>;
}

export default ListPage;