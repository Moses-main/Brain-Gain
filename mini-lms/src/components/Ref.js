function Component() {
    const myValue = useRef();
  
    function updateMyValue(newValue) {
      myValue.current = newValue;
    }
  
    function printMyValue() {
      console.log(myValue.current);
    }
  }

  export default Component