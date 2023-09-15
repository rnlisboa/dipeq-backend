import styled from "styled-components";
import { themes } from "../../config/themes/themes";

export const Main = styled.main`
background-color: ${themes.dark.VeryDark};
width: 100%;
padding: 0 2rem;
`

export const Container = styled.section`
width: 100%;
display: grid;
grid-template-columns:repeat(auto-fit, minmax(17rem, 1fr));
justify-items: center;

`

export const Country = styled.div`
width: 15rem;
height: 20rem;
border-radius: .4rem;
-webkit-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
-moz-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
overflow: hidden;
margin-bottom: 2rem;
`

export const Flag = styled.div`
width: 100%;
height: 50%;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`

export const ImageFlag = styled.img`
width: 100%;
object-fit: contain;
`

export const Info = styled.div`
height: 50%;
width: 100%;
color: ${themes.light.VeryLightGray};
font-family: ${themes.fontFamily};
display: flex;
padding: 0 1.5rem;
flex-direction: column;
align-items: flex-start;
`

export const Title = styled.div`
font-weight: 800;
margin-top: 1rem;
margin-bottom: 1rem;
`

export const CountryInfo = styled.div`
display: flex;
justify-content: center;
gap: .5rem;

`

export const Name = styled.span`
font-weight: 600;
text-transform: capitalize;
`

export const Value = styled.span`
font-weight: 300;
`