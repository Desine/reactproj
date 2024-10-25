export default function NewsObject({ data }){
  
    return(
        <div className="newsObject">
            <img src={data.image} alt="" />
            <h4>{(data.category)}</h4>
            <h3>{(data.title)}</h3>
        </div>
    )
} 