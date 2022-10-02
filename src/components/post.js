import React from 'react';
//import './post.css';
import { Modal, Typography } from 'antd';

const { Text } = Typography;

const Post = (props) => {
	const [open, setOpen] = React.useState(props.show);

	const handleClose = () => {
		setOpen(false);
	}
	
	return (
		<div>
			<Modal
				title={props.title}
				centered
				open={open}
				onCancel={handleClose}
				width={"70p%"}
				height={"80%"}
			>
				<Text bold>{props.description}</Text>
				<br/>
				<Text>{props.content}</Text>
			</Modal>
		</div>
	)
} 

export default Post;
