import React from 'react';
import { Card, Typography } from 'antd';
import './postcard.css';

const { Text} = Typography;

const PostCard = (props) => {
	return (
		<>
			<div onClick={() => {props.onClick(props.id, props.title, props.description)}}>
				<Card
					className={"postcard"}
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

export default PostCard;
