// 7 kyu - Tap Code Translation
function tapCodeTranslation(text) {
  let tapCode = ''
  for (let i=0; i<text.length; i++) {
    switch (text[i].toLowerCase()) {
      case 'a':
      case 'b':
      case 'c':
      case 'k':
      case 'd':
      case 'e':
        tapCode += '. '
        break;
      case 'f':
      case 'g':
      case 'h':
      case 'i':
      case 'j':
        tapCode += '.. '
        break;
      case 'l':
      case 'm':
      case 'n':
      case 'o':
      case 'p':
        tapCode += '... '
        break;
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'u':
        tapCode += '.... '
        break;
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':
        tapCode += '..... '
        break;
    }
    switch (text[i].toLowerCase()) {
      case 'a':
      case 'f':
      case 'l':
      case 'q':
      case 'v':
        tapCode += '. '
        break;
      case 'b':
      case 'g':
      case 'm':
      case 'r':
      case 'w':
        tapCode += '.. '
        break;
      case 'c':
      case 'k':
      case 'h':
      case 'n':
      case 's':
      case 'x':
        tapCode += '... '
        break;
      case 'd':
      case 'i':
      case 'o':
      case 't':
      case 'y':
        tapCode += '.... '
        break;
      case 'e':
      case 'j':
      case 'p':
      case 'u':
      case 'z':
        tapCode += '..... '
        break;
    }
  }
  return tapCode.slice(0,tapCode.length-1);
}
