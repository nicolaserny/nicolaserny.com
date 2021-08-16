import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, SPACES } from '@/constants';
import { ImageMetadata } from '@/utils';

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${SPACES[4]};
`;

const PhotoWrapper = styled.div`
    width: 40%;
`;

const Content = styled.p`
    flex: 1;
`;

export default function Bio({ profileImage }: React.PropsWithChildren<{ profileImage: ImageMetadata }>) {
    return (
        <Wrapper>
            <Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum. Quibusdam illum velit nulla ut
                esse cum autem fugiat voluptas, doloremque harum pariatur nihil dicta accusantium officiis iusto quos
                aperiam?
            </Content>
            <PhotoWrapper>
                <Image
                    src={profileImage.id}
                    alt="My profile photo"
                    width="2000"
                    height="2997"
                    layout="responsive"
                    sizes={`(min-width: ${BREAKPOINTS.phone / 16}rem) 360px, 100vw`}
                    quality="75"
                    {...(profileImage.blurDataUrl && { blurDataURL: profileImage.blurDataUrl, placeholder: 'blur' })}
                />
            </PhotoWrapper>
        </Wrapper>
    );
}
