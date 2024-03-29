import React from 'react';
import { Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons'; 
import './modal.css';

const {Text} = Typography;

const Modal = ({show, onClose, description, title, content}) => {
	if (show === false) {
		return null;
	}
	
	return (
		<div className="modal-background"> 
			<div className="modal">
				<div className="modal-header">
					<div className="cancel-button" onClick={onClose}>
						<CloseOutlined/>
					</div>
					<Text className="modal-title" >* {title}</Text>
				</div>	
				<div className="modal-body">
					<Text className="modal-description"> {description} </Text>
					<br/><br/><br/>
					<div dangerouslySetInnerHTML={{__html:content}}></div>
				</div>
			</div>
		</div>
	)
}

export default Modal; 
