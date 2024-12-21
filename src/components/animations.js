const animations = {
    bounce: {
      "@keyframes bounce": {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-20px)",
        },
      },
      animation: "bounce 1s",
    },
    rotate: {
      "@keyframes rotate": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      animation: "rotate 2s linear ",
    },
    scale: {
      "@keyframes scale": {
        "0%": { transform: "scale(0.1)" },
        "100%": { transform: "scale(1)" },
      },
      animation: "scale 1s",
    },
    fade: {
      "@keyframes fade": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      animation: "fade 1s ",
    },
    slideLeft: {
      "@keyframes slideLeft": {
        "0%": { transform: "translateX(50px)" },
        "100%": { transform: "translateX(0px)" },
      },
      animation: "slideLeft 1s",
    },
    slideRight: {
      "@keyframes slideRight": {
        "0%": { transform: "translateX(-50px)" },
        "100%": { transform: "translateX(0px)" },
      },
      animation: "slideRight 1s ",
    },
    pulsate: {
      "@keyframes pulsate": {
        "0%, 100%": { transform: "scale(1)", opacity: 1 },
        "50%": { transform: "scale(1.2)", opacity: 0.5 },
      },
      animation: "pulsate 1.5s ",
    },
    wobble: {
      "@keyframes wobble": {
        "0%": { transform: "rotate(0deg)" },
        "25%": { transform: "rotate(5deg)" },
        "50%": { transform: "rotate(-5deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
      animation: "wobble 1s",
    },
    flip: {
      "@keyframes flip": {
        "0%": { transform: "rotateY(0deg)" },
        "100%": { transform: "rotateY(360deg)" },
      },
      animation: "flip 1.5s ",
    },
    swing: {
      "@keyframes swing": {
        "0%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(15deg)" },
        "100%": { transform: "rotate(-15deg)" },
      },
      animation: "swing 1s ",
    },
    shake: {
      "@keyframes shake": {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-5px)" },
        "75%": { transform: "translateX(5px)" },
      },
      animation: "shake 0.5s ",
    },
  };


export default animations