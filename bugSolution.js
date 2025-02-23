```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way: add a condition to break the loop 
    let intervalId;
    const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
    }
    intervalId = setInterval(incrementCount, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```