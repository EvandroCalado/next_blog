import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { DarkMode, LightMode } from '@styled-icons/material-outlined';
import { BlogThemeContext } from '../../context/BlogTheme';

const toggle = {
  light: <LightMode />,
  dark: <DarkMode />,
};

const ToggleButton = () => {
  const [light, setLight] = useState(true);
  const { setTheme } = useContext(BlogThemeContext);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setLight(false);
    }
  }, []);

  useEffect(() => {
    setTheme?.(light ? 'default' : 'inverted');
  }, [setTheme, light]);

  const handleChange = () => {
    setTheme?.(light ? 'default' : 'inverted');
    setLight(!light);
  };

  return (
    <Styled.Button onClick={handleChange}>
      {toggle[light ? 'light' : 'dark']}
    </Styled.Button>
  );
};

export default ToggleButton;
