import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    z-index: 9999;

    @media screen and (max-width: 800px) {
        margin-top: 5rem;
        margin-bottom: 5rem;
        height: 700px;

    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
    }
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`

export const ImgColombia = styled.img`
    width: 90rem;
    margin-left: 2rem;
    margin-right: 2rem;

     @media screen and (max-width: 800px) {
        width: 40rem;
    }
    @media screen and (max-width: 600px) {
        width: 30rem;
    }

   
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
