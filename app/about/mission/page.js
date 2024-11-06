import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import thumb from "@/public/images/thumb.jpg";

export default function Mission() {
  return (
    <main className="mt-10">
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, modi?
        Exercitationem, ab! Eos ipsa tempora ipsum? Cum similique, ratione
        dignissimos numquam illum ad commodi sint, consequatur est eum vitae
        nemo?
      </div>

      <div className="w-[500px]">
        <Image placeholder="blur" src={thumb} alt="thumb image" />
      </div>
      <div className="mt-5">
        <Button />
      </div>
    </main>
  );
}
