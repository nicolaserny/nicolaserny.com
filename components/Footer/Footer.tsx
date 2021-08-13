import styled from 'styled-components';
import { COLORS } from '@/constants';

const Wrapper = styled.footer`
    background: ${COLORS.primary[900]};
    height: 300px;
`;

export default function Footer() {
    return <Wrapper />;
}
