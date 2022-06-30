import fs from 'node:fs';

console.log(
	'loaded ts-ext-ts/index.tsx.ts',
	JSON.stringify({
		nodePrefix: Boolean(fs),
		hasDynamicImport: Boolean(import('fs')),
		...(() => {
			let nameInError;
			try {
				nameInError();
			} catch (error) {
				return {
					nameInError: error.message.includes('nameInError'),
					sourceMap: error.stack.includes(':11:5'),
				};
			}
		})(),
		'import.meta.url': Boolean(import.meta.url),
	}),
);

function valueNumber(value: number) {
	return value;
}

export default valueNumber(1234);