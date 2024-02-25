### About
**informer-client** is a ts package for easier communication with **informer API**
### Example
```ts 
import { createInformerApi } from 'informer-client';

const { sendMessage } = createInformerApi({
	url: 'http://127.0.0.1:3000/topic/message',
	token: '7cf8d705-a98a-4e80-af60-773701bdb803',
});

(async () => {
	await sendMessage({
		topic: 'testTopic',
		message: 'Hello world!',
	});
})();
```
