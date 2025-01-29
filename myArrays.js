class MyArrayUtils {
    // mySlice
    mySlice(arr, start=0, end=arr.length) {
      let result = [];
  
      // если старт отрицательный
      if (start < 0) {
        start = arr.length + start;
      }
  
      // если end отрицательный
      if (end < 0) {
        end = arr.length + end;
      }
   
  
      // отбор
      for (let i = start; i < end; i++) {
        result.push(arr[i]);
      }
  
      return result;
    }
  
    // myIndexOf
    myIndexOf(arr, item, from = 0) {
      // если старт отрицательный
      if (from < 0) {
        from = arr.length + from;
      }
  
      for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
          return i; // результат
        }
      }
  
      return -1; // если не нашли
    }
  
    // myIncludes
    myIncludes(arr, item, from = 0) {
      // если старт отрицательный
      if (from < 0) {
        from = arr.length + from;
      }
    
       
      for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
          return true;
        }
      }
    
      return false;
    }
  }
  
  // Example Usage
  const myArrayMethods = new MyArrayUtils();
  
  const array = [1, 2, 3, 4, 5];
  
  console.log(myArrayMethods.mySlice(array, -3, -1)); 
  console.log(myArrayMethods.myIndexOf(array, 8)); 
  console.log(myArrayMethods.myIncludes(array, 3)); 
  console.log(myArrayMethods.myIncludes(array, 8)); 
  