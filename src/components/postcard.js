import React from 'react';
import { Card, Typography } from 'antd';
import './postcard.css';
import api from '../api/api';
import Modal from './modal.js';

const { Meta } = Card;
const { Text, Title } = Typography;

const PostCard = (props) => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const [postcardStyle, setPostcardStyle] = React.useState('postcard-desktop');
	const [content, setContent] = React.useState();
	const [contentShow, setContentShow] = React.useState(false);
	
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
		if (width <= 768) {
			setPostcardStyle('postcard-mobile');
		} else {
			setPostcardStyle('postcard-desktop');
		}
	}

	React.useEffect(() => {
		console.log(contentShow);
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		}
	});


	return (
		<>
			<div onClick={() => {props.onClick(props.id, props.title, props.description)}}>
				<Card
					className={postcardStyle}
					bordered={false}
					hoverable>
					<p>
						<Text className="postcard-title"> * {props.title}</Text>
						<br/>	
						<br/>
						<Text className="postcard-description">{props.description}</Text>
					</p>
				</Card>
			</div>
		</>
	)
} 


/*
<div >
				<Modal 	
					title={props.title}
					centered
					open={contentShow}
					onCancel={() => {setContentShow(false)}}
					width={"70p%"}
					height={"80%"}
				>
					<Text bold>{props.description}</Text>
					<br/>
					<Text>{content}</Text>
				</Modal>
			</div>


  */
export default PostCard;
