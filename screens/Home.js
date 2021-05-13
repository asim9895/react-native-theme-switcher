import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { switch_theme } from '../redux/actions/themeAction';
import { darkTheme, lightTheme } from './Theme';

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextContainer>
          <Text>Switch Output here</Text>
        </TextContainer>

        {theme.mode === 'light' ? (
          <Button onPress={() => dispatch(switch_theme(darkTheme))}>
            <ButtonText>Switch dark</ButtonText>
          </Button>
        ) : (
          <Button onPress={() => dispatch(switch_theme(lightTheme))}>
            <ButtonText>Switch dark</ButtonText>
          </Button>
        )}
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.card_text_color};
`;

const TextContainer = styled.View`
  padding: 30px;
  border: 1px solid ${(props) => props.theme.card_text_color};
  background-color: ${(props) => props.theme.card_background_color};
  border-radius: 20px;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.card_text_color};
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.button_color};
  margin-top: 15px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.button_text_color};
`;
const ButtonText = styled.Text`
  color: ${(props) => props.theme.button_text_color};
  padding: 15px;
`;

export default Home;
