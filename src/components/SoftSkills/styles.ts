import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
`

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const SkillsContainerIndividual = styled.div`
    margin: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 600px) {
        margin: 2rem;
    }
`
export const SofSkillsDescription = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    text-align: center;
    margin-top: 1rem;
    font-weight: 500;
`
