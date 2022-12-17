import React from 'react';
import { Tabs, Row, Col, PageHeader } from 'antd';
import './App.css';
import PostCard from './components/postcard';
import Modal from './components/modal';
import api from './api/api';
import './style.less';

const { TabPane } = Tabs;

function App() {
	const [posts, setPosts] = React.useState();
	const [width, setWidth] = React.useState(window.innerWidth);
	const [tabPosition, setTabPosition] = React.useState('');
	
	const [isLoaded, setLoaded] = React.useState(false);


	const [title, setTitle] = React.useState();
	const [description, setDescription] = React.useState();
	const [content, setContent] = React.useState();
	const [show, setShow] = React.useState(false);
	
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
		if (width <= 768) {
			setTabPosition('top');
			//setContentStyle('content-mobile');
		} else {
			setTabPosition('left');
			//setContentStyle('content-desktop');
		}
	}

	const handleOnClose = () => {
		setShow(false);
	}

	const handlePostcardClick = (id, title, description) => {
		setTitle(title);
		setDescription(description);
		api.get('/posts/' + id).then((response) => {
			setContent(response.data);
			setShow(true);
		})
		.catch(err => {
			console.log(err);
			setShow(false);
		})
	} 
	
	React.useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		}
	});

	React.useEffect(() => {
		setWidth(window.innerWidth);
		if (width <= 768) {
			setTabPosition('top');
		} else {
			setTabPosition('left');
		}
	}, [])
	
	React.useEffect(() => {
		api.get('/posts').then((response) => {
			setPosts(response.data);
			setLoaded(true);
		}).catch(err => {
			console.log('error fetching database');
		})
	}, []);

	// add tags and ids and other stuff to posts
	return (
		<>
		{isLoaded &&
		 <>
			<Modal
				title={title}
				show={show}
				onClose={handleOnClose}
				description={description}
				content={content}
			/>
		   	<div className="App">
				<div className="background"></div>
				<div className="heading">
					<PageHeader
						style={{ padding: 10 }}
						className="site-page-header" 
						title={
							<h3 style={{color: "white"}}>
								<span>"The end justifies the means"</span>
							</h3>}
					/>
				</div>
				<div className="body">
					<Tabs tabPosition={tabPosition}>
						<TabPane  tab="posts" key="1" size="small">
							<div className="post-content">
								<Row gutter={[30, 50]} >
									{posts.map((post) => (
										<Col
											style={{ display: 'flex', flexDirection: 'column'}}>
											<PostCard id={post._id} title={post.title} description={post.description} tags={post.tags} onClick={handlePostcardClick}/> 
										</Col>
									))}
								</Row>

							</div>

						</TabPane>

						<TabPane tab="about" key="2">
							<div className="content">
								<p className="content-paragraph">
									I go by rxOred. I do software programming to make a living and also do lots of reverse engineering as a hobby.
									<br/>
									<br/>
									But for the most part, who / what am I is irrelavent. This blog is just one of simple efforts to make my reading journals persistent. I dont really care about who reads this.  
									I am also hoping to upload my views and ideas on various topics, whether it maybe a social, political or simply, personal. 
									<br/>
									<br/>
									I would like to point out that I, as a programmer, has no academic background on the subjects that I write here. Please be kind to send me an email if you find anything where I am wrong. And if you find anything I write here offensive, I would like you to know that, I dont care.
									<br/>
									<br/>
									<b>#Spread Anarchy</b>
								</p>
							</div>

						</TabPane>

						<TabPane tab="contact" key="3">
							<div className="content">
								<p className="content-paragraph">
									technical blog <a href='https://rxored.github.io/'>rxored.github.io</a>
									<br/>
									<br/>
									email rxored@gmail.com</a>
									<br/>
									<br/>
									github <a href='https://github.com/rxOred/'>rxOred</a>
									<br/>
									<br/>
									I dont use any other social media so, No.
								</p>

							</div>
						</TabPane>
					</Tabs>
				</div>	
			</div>
		</>
		}
		</>
	);
}

export default App;
