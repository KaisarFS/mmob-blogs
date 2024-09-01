import { ref } from 'vue';

export const useTheme = () => {
  const isDarkMode = ref(false);

  const themeInit = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      isDarkMode.value = true;
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      isDarkMode.value = false;
    }
  };

  const themeSwitch = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      isDarkMode.value = false;
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      isDarkMode.value = true;
    }
  };

  return {
    isDarkMode,
    themeInit,
    themeSwitch,
  };
};
