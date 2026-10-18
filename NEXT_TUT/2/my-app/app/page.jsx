"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setcount] = useState(0);
  return (
    <div>
      This is a compopnment {count}
      <button onClick={()=>setcount(count + 1)}>Click</button>
    </div>
  );
}
