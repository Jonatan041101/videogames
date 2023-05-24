import Icons from '@/atoms/Icons/Icons';
import { Comment } from '@/types/game';
import { decodeHTMLEntities, findURLs, stripHTMLTags } from '@/utils/utils';

interface Props {
	comment: Comment;
}

export default function CommentC({ comment }: Props) {
	const textWithUrl = stripHTMLTags(comment.text);
	const { text } = findURLs(textWithUrl);
	const textFull = decodeHTMLEntities(text);
	findURLs(text);
	const date = new Date(comment.created).toLocaleString('es-AR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return (
		<div className="comment">
			<h3 className="comment__title">{comment.name}</h3>
			<p className="comment__p">{`"${textFull}"`}</p>
			<div className="comment__div">
				<div className="">{date} </div>
				<a target="_blank" href={comment.url} className="comment__icon">
					<Icons icon="reddit" />
				</a>
			</div>
			<div>
				<a href={comment.username_url} target="_blank" className="comment__red">
					@{comment.username}
				</a>
			</div>
		</div>
	);
}
