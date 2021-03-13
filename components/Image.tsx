import NextImage, { ImageProps } from 'next/image'

export default function Image({ loading = 'lazy', ...props }: ImageProps) {
	return (
		<NextImage layout="responsive" loading={loading} {...props} />
	)
}
