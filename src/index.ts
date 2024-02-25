export const createInformerApi = (options: {
	url: string;
	token: string;
}) => ({
	sendMessage: async (body: {
		topic: string;
		message: string;
	}) => {
		const res = await fetch(options.url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: options.token,
			},
			body: JSON.stringify({
				topic: body.topic,
				body: body.message,
			}),
		});

		return res.status;
	},
});
