import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
export const Panel = styled.div`
  background-color: var(--white);
  box-shadow: var(--panel);
  display: grid;
  grid-template-columns: 67fr 33fr;
`;
export const Column = styled.div``;
export const Galeria = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;
  > img {
    width: 530px;
    height: 75%;
  }
`;
export const Description = styled.div`
  border-top: 1px solid var(--border);
  width: 60%;
  margin: 0 auto;
  padding: 40px;
  > h4 {
    color: var(--text1);
    font-size: 24px;
    margin-bottom: 32px;
  }
  > p,
  span {
    line-height: 27px;
    font-size: 20px;
    color: var(--text3);
  }
  > hr {
    border-top: 1px solid var(--text2);
  }
`;

export const Section = styled.div`
  padding: 32px 16px;
  margin: 0 16px;
  border: 1px solid red;
  border-bottom: none;
  > h4 {
    font-size: 18px;
    margin-bottom: 28px;
    color: var(--text1);
    line-height: 22.5px;
  }
  > div {
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

    > span + span {
      margin: 24px;
    }
  }
`;
