'use client'
import { League_Gothic } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Clipboard from "./clipboard.js";
import copy from "copy-to-clipboard";
import {
    Heading,
    Input1,
    Input2,
    Container,
    Button,
} from "./styles";

export default function Home() {
  const [count,setCount] = useState(100)
  const [text,setText] = useState("bruh let's just go tmr")
  const copyToClipboard = () => {
    copy(text.repeat(count));
    alert(`You have copied "${text.repeat(count)}"`);
};
  return (
    <div>
      <h1>Repeat your annoying texts from your friends!</h1>
      <div>
        <label>Input an annoying text you want to repeat! :</label>
        <input type="text" value={text} onChange={(event)=>setText(event.target.value)} className="text-slate-500" />
        <br />
        <label>How many times do you wan to repeat this annoying text! :</label>
        <input type="number" value={count} onChange={(event)=>setCount(event.target.value)} className="text-slate-700" />
      </div>
      <Button onClick={copyToClipboard}>copy</Button>
      <div className="bg-slate-100">
        <p className="text-gray-600">{text.repeat(count)}</p>
      </div>
    </div>
  );
}
