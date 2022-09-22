export default function ControlTheme({
  pageBody,
  btnLightTheme,
  btnDarkTheme
}) {
  
  function themeChanger() {
    if (pageBody.className.includes('light-theme')) {
      pageBody.classList.remove('light-theme');
      pageBody.classList.add('dark-theme');
      btnLightTheme.classList.remove('hide');
      btnDarkTheme.classList.add('hide');
    } else {
      pageBody.classList.remove('dark-theme');
      pageBody.classList.add('light-theme');
      btnLightTheme.classList.add('hide');
      btnDarkTheme.classList.remove('hide'); 
    }
  }

  return{
    themeChanger
  }
}