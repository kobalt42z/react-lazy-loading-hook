
# react-mg-lazy-loading

chipopo
### easy way to make lazy loading images in your website
```bash
  npm i react-mg-lazy-loading
```


## Usage

```javascript
import useLazyLoading from "react-mg-lazy-loading" ;

function App() {
  const loader = useRef(null);

  const options={
    target:loader,
    distance:"0px",
    targetPercent:1,
    initPage:0
  }

  const { data, setData } = useLazyLoading(options,(page)=>{
    // make api request by page parameter and update the data with setData function
  });

  return (
    <div>
      <div>
        // rendering the data
        {data.map((item, i) => <img src={item.src}></img>)}
      </div>
        // the loader
      <div ref={loader}>trigger</div>
    </div>
  )
}
```

