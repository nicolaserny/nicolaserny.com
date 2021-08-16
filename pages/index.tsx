import Bio from '@components/Bio';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import { MAX_CONTENT_WIDTH } from '@/constants';
import { getBase64ImageUrl, ImageMetadata } from '@/utils';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const Main = styled.main`
    flex: 1;
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
`;

export default function Home({ profileImage }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Wrapper>
            <Header />
            <Main>
                <Bio profileImage={profileImage} />
            </Main>
            <Footer />
        </Wrapper>
    );
}

export async function getStaticProps() {
    const profilePhotoId = `${process.env.NEXT_PUBLIC_CLOUDINARY_PREFIX}/profile.jpg`;
    const profilePhotoBlurDataUrl = await getBase64ImageUrl(profilePhotoId);
    return {
        props: {
            profileImage: {
                id: profilePhotoId,
                ...(profilePhotoBlurDataUrl && { blurDataUrl: profilePhotoBlurDataUrl }),
            } as ImageMetadata,
        },
    };
}
