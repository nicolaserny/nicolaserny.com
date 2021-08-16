export type ImageMetadata = {
    id: string;
    blurDataUrl?: string;
};

export async function getBase64ImageUrl(imageId: string): Promise<string | undefined> {
    if (process.env.ENABLE_BLUR_PLACEHOLDER === 'false') {
        return undefined;
    }
    const response = await fetch(`${process.env.CLOUDINARY_BASE_URL}w_750/e_blur:1000,q_1,f_auto${imageId}`);
    const buffer = await response.arrayBuffer();
    const data = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${data}`;
}
