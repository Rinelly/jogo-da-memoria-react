
import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px;
  flex-wrap: wrap;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
      margin-bottom: 50px;  
      align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
    
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
`;

