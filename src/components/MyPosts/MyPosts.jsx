import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {

	const textarea = React.createRef();
	const postsElements = props.posts.map((item) => {
		return <Post message={item.message} likeCount={item.likeCount} />
	});

	const addPost =() => {		
		let post = textarea.current.value;
		props.addPost(post);
	}

	const onPostChange = ()=> {		
		let text = textarea.current.value;
		props.onPostChange(text);
	}
	return (
		<div>
			{postsElements}
			<div>
				<div>
					<textarea name="" ref={textarea} onChange = {onPostChange} value={props.newPostText}></textarea>
				</div>
				<input type="submit" value="Submit" onClick={addPost}/>
			</div>
		</div>
	)
}

export default MyPosts;