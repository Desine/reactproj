import { news } from '../news'
import NewsObject from './NewsObject'
import '../static/style.css'


export default function News({ selected_category }) {


  return (
    <div className='news'>
      {news
        .filter(newsObject => newsObject.category === selected_category || selected_category == null)
        .map((newsObject) => (
            <NewsObject data={newsObject} />
          )
        )}
    </div>
  )
}
