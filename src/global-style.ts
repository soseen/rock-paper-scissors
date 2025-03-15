import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background-gradient: radial-gradient(circle at center, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    --scissors-gradient: linear-gradient(45deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);
    --paper-gradient: linear-gradient(45deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);
    --rock-gradient: linear-gradient(45deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);
    --lizard-gradient: linear-gradient(45deg, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%);
    --spock-gradient: linear-gradient(45deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%);

    --dark-text: hsl(229, 25%, 31%);
    --score-text: hsl(229, 64%, 46%);
    --header-outline: hsl(217, 16%, 45%);
  }

body {
    background: var(--background-gradient);
    font-family: "Barlow Semi Condensed", sans-serif;
    overflow: hidden;
}

.coin-scissors {
  background: var(--scissors-gradient);
}

.coin-paper {
  background: var(--paper-gradient);
}

.coin-rock {
  background: var(--rock-gradient);
}

.coin-lizard {
  background: var(--lizard-gradient);
}

.coin-spock {
  background: var(--spock-gradient);
}

@media screen and (max-width: 580px) {
  body {
    font-size: 9px
  }
}

`;

export default GlobalStyle;
