import { news } from '../news'

export default function OpenedNews({ selected_category }) {
  return (
    <div className="openedNews">
      {news
        .filter(
          (newsObject) =>
            newsObject.category === selected_category ||
            selected_category == null
        )
        .map(newsObject => (
          <div className="openedNewsObject">
            <h3>{newsObject.title}</h3>
            <img src={newsObject.image} alt="" />
            <h4>{newsObject.body}</h4>
            <h4>Категория: {newsObject.category}</h4>
          </div>
        ))}
    </div>
  );
}
