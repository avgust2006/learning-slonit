const stringObj = {
    capitalLetter(str) {
      if (!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    trimWithEllipsis(str, maxLength) {
      if (str.length <= maxLength) return str;
  
      let tempStr = str.slice(0, maxLength);
      let lastSpaceIndex = Math.max(tempStr.lastIndexOf(' '), tempStr.lastIndexOf(','), tempStr.lastIndexOf('.'), tempStr.lastIndexOf('!'), tempStr.lastIndexOf('?'), tempStr.lastIndexOf(':'));
  
      if (lastSpaceIndex > 0) {
        tempStr = tempStr.slice(0, lastSpaceIndex);
      }
  
      return `${tempStr}...`;
    },
  
    hasSubstring(str1, str2) {
      return str1.includes(str2) || str2.includes(str1);
    }
  };
  
  // проверка:
  
  // 1. Заглавная буква
  console.log(stringObj.capitalLetter("hello world")); 
  
  // 2. Добавление троеточия
  console.log(stringObj.trimWithEllipsis("This is a long sentence with too, many words.", 40)); 
  
  console.log(stringObj.trimWithEllipsis("Short sentence.", 40)); 
  
  // 3. Проверка подстроки
  console.log(stringObj.hasSubstring("hello", "hell")); 
  console.log(stringObj.hasSubstring("JavaScript", "Python")); 
  