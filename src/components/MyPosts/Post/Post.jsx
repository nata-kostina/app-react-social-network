import s from "./Post.module.css"
const Post = (props) => {
	return (
		<div>
			<div className={s['img-container']}>
			<img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
			</div>
			<p>{props.message}</p>
			<div>
				<span>{props.likeCount}</span>
			</div>
		</div>
	)
}

export default Post;