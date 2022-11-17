import { Post } from "./components/Post"

import './global.css';
import styles from './App.module.css';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/justin1508',
			name: 'Helio Jr',
			role: 'CTO'
		},
		content: [
			{ type: 'paragraph', content: 'Fala Dev' },
			{ type: 'paragraph', content: 'Commit realizado' },
			{ type: 'link', content: 'github.com' },
		],
		publishedAt: new Date('2022-05-03 20:00:00')
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/justin1508',
			name: 'Helio',
			role: 'CEO'
		},
		content: [
			{ type: 'paragraph', content: 'Fala Dev' },
			{ type: 'paragraph', content: 'Commit realizado' },
			{ type: 'link', content: 'github.com' },
		],
		publishedAt: new Date('2022-05-04 20:00:00')
	},
]

export function App() {

	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => {
						return (
							<Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
						)
					})}

				</main>
			</div>


		</div>
	)
}

