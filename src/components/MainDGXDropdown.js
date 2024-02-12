import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutSideClick";

const MainDGXDropdown = ({ data, main, setMain, defaultVal }) => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    const name = data?.find(item => item.key === defaultVal)?.name ?? "انتخاب کنید";
    setMain({
      key :defaultVal,
      name,
    })
  }, [defaultVal])

  useOutsideClick(wrapperRef, () => setIsOpen(false));
  
  return (<div ref={wrapperRef}> 
    <div  className="input size text color" onClick={() => toggle()}>
      <span>{main.name}</span>
    </div>
    {isOpen && 
      <div className="list size color">
        {
          data?.map(item =>
            <div key={item.key} className="item size text" onClick={() => {
              setMain({
                id: item.key,
                name:item.name
              })
              toggle()  
            }} >
             {item.name}
            </div>
            )
        }
        </div>
      }
  </div>)
}

export default MainDGXDropdown;