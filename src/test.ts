import { createInformerApi } from '.';

const { sendMessage } = createInformerApi({
	url: 'http://127.0.0.1:3000/topic/message',
	token: '08f65834-4143-44d7-bc64-49f4085090c9',
});

(async () => {
	const status = await sendMessage({
		topic: 'yasasal',
		message: 'diman loh',
	});
	console.log(status);
})();
