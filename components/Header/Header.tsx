import styled from 'styled-components';
import { COLORS, MAX_CONTENT_WIDTH, SPACES, TEXT, WEIGHTS } from '@/constants';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

const HeaderContent = styled.header`
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
    padding: ${SPACES[9]} 0 ${SPACES[9]} 0;
    isolation: isolate;
`;

const Title = styled.h1`
    font-family: 'Space Mono', monospace;
    font-size: ${TEXT['4xl']};
    color: ${COLORS.white};
    font-weight: ${WEIGHTS.normal};
`;

const SubTitle = styled.h2`
    font-family: 'Space Mono', monospace;
    font-size: ${TEXT['2xl']};
    color: ${COLORS.primary[100]};
    font-weight: ${WEIGHTS.normal};
`;

const HeroBackground = styled.div`
    min-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
`;

const HeroSvg = styled.svg`
    width: 100%;
    height: 100%;
`;

export default function Header() {
    return (
        <Wrapper>
            <HeroBackground>
                <HeroSvg
                    viewBox="0 0 1440 477"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M0-2.004v435.192c228.812 40.16 265.562 51.963 368.669 38.472 103.106-13.49 260.029-121.913 531.627-110.921C1171.89 371.731 1445 102.922 1445 102.922V-7L0-2.004z"
                        fill="url(#hero-gradient)"
                    />
                    <defs>
                        <linearGradient
                            id="hero-gradient"
                            x1="17.101"
                            y1="-7"
                            x2="1359.58"
                            y2="307.699"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor={COLORS.primary[900]} />
                            <stop offset="1" stopColor={COLORS.secondary[900]} />
                        </linearGradient>
                    </defs>
                </HeroSvg>
            </HeroBackground>
            <HeaderContent>
                <Title>Nicolas Erny</Title>
                <SubTitle>Software Engineer in Paris</SubTitle>
            </HeaderContent>
        </Wrapper>
    );
}
