import Footer from '@components/Footer';
import Header from '@components/Header';
import styled from 'styled-components';
import { MAX_CONTENT_WIDTH } from '@/constants';

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

export default function Home() {
    return (
        <Wrapper>
            <Header />
            <Main>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum. Quibusdam illum velit nulla
                    ut esse cum autem fugiat voluptas, doloremque harum pariatur nihil dicta accusantium officiis iusto
                    quos aperiam?
                </p>
            </Main>
            <Footer />
        </Wrapper>
    );
}
