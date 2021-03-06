import styled from 'styled-components';

export const HeaderDiv = styled.div`
  width: 100%;
  background: turquoise;
  border-bottom: 4px solid white;
  display: flex;
`;

export const HeaderImage = styled.img`
  width: 8%;
  height: 8%;
  margin-top: .8%;
`;

export const HeaderText = styled.h1`
  color: white;
  text-align: center;
  padding: 2%;
`;

export const UserCardDiv = styled.div`
  width: 30%;
  margin: 1% auto;
  padding: 1%;
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 20px;
  background: slateblue;
`;

export const UserCardImageDiv = styled.div`
  width: 40%;
  margin: 0 auto;
  padding-top: 1%;
`;

export const UserCardImage = styled.img`
  width: 100%;
  border: 1px solid turquoise;
  border-radius: 20px;
`;

export const UserCardTextDiv = styled.div`
  width: 100%;
  margin: 1% auto;
`;

export const UserCardH4 = styled.h4`
  color: white;
  font-size: 1.8rem;
  margin: 0 0 1% 0;
`;

export const UserCardH6 = styled.h6`
  color: white;
  font-size: 1.2rem;
  margin: 0 0 1% 0;
`;

export const UserCardText = styled.p`
  font-size: .8rem;
  margin: 0;
`;

export const UserCardLink = styled.a`
  text-decoration: none;
  color: turquoise;
  font-size: .8rem;
  margin-bottom: 1%;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const FollowerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const FollowerDiv = styled.div`
  width: 20%;
  margin: 1%;
  padding: 1%;
  background: white;
  border: 2px solid slateblue;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const FollowerImageDiv = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const FollowerImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const FollowerText = styled.p`
  font-size: 1.2rem;
  color: slateblue;
  margin: 1% 0 0 0;
`;

export const FollowerLink = styled.a`
  font-size: .8rem;
  color: turquoise;
  &:hover {
    color: slateblue;
    cursor: pointer;
  }
`;

export const SearchDiv = styled.div`
  width: 25%;
  margin: 1% auto;
  padding: 1%;
`;

export const SearchTitle = styled.h3`
  color: slateblue;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin: 2%;
`;

export const SearchInput = styled.input`
  width: 60%;
  background: white;
  border: none;
  color: turquoise;
  font-size: 1.2rem;
  margin-right: 5%;
`;

export const SearchButton = styled.button`
  width: 30%;
  font-size: 1.2rem;
  background: slateblue;
  color: turquoise;
  border: 1px solid white;
  border-radius: 20px;
  &:hover{
    background: white;
    colot: darkgrey;
  }
`;