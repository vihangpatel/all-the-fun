import React from 'react'
import { news } from '../data/news'

class News extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					{news.map((n, i) => (
						<div key={i} className="col-md-4 col-sm-6 col-xs-12">
							<div className="newsContainer">
								<div className="news-image">
									<img alt={n.title} src={n.image} />
								</div>
								<div className="time">{n.date}</div>
								<h3 className="news-title">{n.title}</h3>
								<p className="news-text">{n.description}</p>
								<a className="news-link" href={n.link} target="_blank" rel="noopener noreferrer">
									Read more
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default News
