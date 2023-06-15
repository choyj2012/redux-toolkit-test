import { useDispatch, useSelector } from "react-redux";
import { addPage, nextPage, prevPage, savePage } from "./notepadSlice";
import { useEffect, useState } from "react";

export function Notepad() {
  
  const nowPage = useSelector((state) => state.notepad.nowPage)
  const totalPage = useSelector((state) => state.notepad.totalPage);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');

  useEffect(() => {

  }, [nowPage])
  return (
    <div style={{width: '200px', height: '300px',
    boxSizing: 'border-box'}}>
      <div style={{
        display: 'flex', height: '20%',
        justifyContent: 'space-between',
        alignItems: 'center'}}>
        <button style={{height: '50%'}}
          onClick={() => dispatch(prevPage())}>{'<'}</button>
        {nowPage}/{totalPage}
        <button style={{height: '50%'}}
          onClick={() => dispatch(nextPage())}>{'>'}</button>
      </div>

      <div style={{
        display: 'flex', width: '100%', height: '10%',
        justifyContent: 'space-between'
      }}>
        <button onClick={() => dispatch(addPage())}>ADD</button>
        <button>DEL</button>
        <button onClick={() => dispatch(savePage(msg))}>SAVE</button>
        <button>RESET</button>
      </div>
      
        <textarea style={{
          width: '200px', height: '60%',
          resize: 'none', padding: '0px'
        }} value={msg} onChange={e => setMsg(e.target.value)} />
    </div>
  );
}