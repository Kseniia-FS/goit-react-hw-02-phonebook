import styled from "@emotion/styled";

export const ContactList = styled.ul`
  list-style: none;
`;

export const Title = styled.h2`
  font-size: 34px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;

  span {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  text-align: center;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
